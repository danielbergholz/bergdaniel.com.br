import type { ChannelStats, LatestVideos, Playlists } from "@/lib/types"
import { parseIsoDuration } from "@/lib/utils"

const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const BASE_URL = "https://www.googleapis.com/youtube/v3"
const PLAYLISTS_URL = `${BASE_URL}/playlists?part=snippet,contentDetails&maxResults=50&key=${API_KEY}&channelId=${CHANNEL_ID}`
const CHANNEL_URL = `${BASE_URL}/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`

// Every channel's auto-generated "uploads" playlist shares the channel id with
// the `UC` prefix swapped for `UU` — so we can list recent uploads with a single
// playlistItems call (1 quota unit) instead of an extra channels lookup.
const UPLOADS_PLAYLIST_ID = CHANNEL_ID?.replace(/^UC/, "UU")

const getPlaylists = async () => {
  const response = await fetch(PLAYLISTS_URL)

  // Throw on any bad response so ISR keeps serving the last healthy page.
  // YouTube returns 403 on quota exhaustion with a parseable error body that
  // lacks `items`; without these guards that surfaces as a cryptic crash and
  // an empty `items` array would silently cache an empty courses page.
  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data: Playlists = await response.json()
  if (!Array.isArray(data.items)) {
    throw new Error("YouTube API: missing playlist items")
  }

  return data.items
}

export const getChannelStats = async () => {
  const response = await fetch(CHANNEL_URL, { next: { revalidate: 86400 } })
  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data: ChannelStats = await response.json()
  const stats = data.items?.[0]?.statistics
  if (!stats) {
    throw new Error("YouTube API: missing channel statistics")
  }

  return {
    subscriberCount: Number(stats.subscriberCount),
    viewCount: Number(stats.viewCount)
  }
}

export const getLatestVideos = async (maxResults = 6) => {
  const url = `${BASE_URL}/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${UPLOADS_PLAYLIST_ID}&key=${API_KEY}`
  const response = await fetch(url, { next: { revalidate: 3600 } })

  // Same guards as the other calls: throw on any bad response so ISR keeps
  // serving the last healthy page instead of caching an empty/broken video list.
  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data: LatestVideos = await response.json()
  if (!Array.isArray(data.items)) {
    throw new Error("YouTube API: missing playlist items")
  }

  return data.items
}

export const getCourses = async () => {
  const playlists = await getPlaylists()
  const englishCourses = playlists.filter((playlist) =>
    playlist.snippet.title.toLowerCase().includes("course")
  )
  const portugueseCourses = playlists.filter((playlist) =>
    playlist.snippet.title.toLowerCase().includes("curso")
  )

  return { englishCourses, portugueseCourses }
}

type DurationResponse = {
  items?: { id: string; contentDetails?: { duration?: string } }[]
}

type PlaylistVideoIdResponse = {
  items?: { contentDetails?: { videoId?: string } }[]
  nextPageToken?: string
}

// Durations live on the videos endpoint, not playlistItems. Used to show video
// length and to detect Shorts (which the API has no flag for). Batched 50 ids
// per call; durations never change, so cache for a day.
export const getVideoDurations = async (videoIds: string[]) => {
  const durations = new Map<string, number>()
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50)
    const url = `${BASE_URL}/videos?part=contentDetails&id=${batch.join(",")}&key=${API_KEY}`
    const response = await fetch(url, { next: { revalidate: 86400 } })
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data: DurationResponse = await response.json()
    if (!Array.isArray(data.items)) {
      throw new Error("YouTube API: missing video items")
    }

    for (const item of data.items) {
      if (item.contentDetails?.duration) {
        durations.set(item.id, parseIsoDuration(item.contentDetails.duration))
      }
    }
  }
  return durations
}

const getPlaylistVideoIds = async (playlistId: string): Promise<string[]> => {
  const ids: string[] = []
  let pageToken = ""
  do {
    const url = `${BASE_URL}/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlistId}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`
    const response = await fetch(url, { next: { revalidate: 86400 } })
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data: PlaylistVideoIdResponse = await response.json()
    for (const item of data.items ?? []) {
      if (item.contentDetails?.videoId) ids.push(item.contentDetails.videoId)
    }
    pageToken = data.nextPageToken ?? ""
  } while (pageToken)
  return ids
}

// Every video id that belongs to a course playlist, so the merged feed can
// exclude course content (it has its own page). Course memberships rarely
// change, so cache for a day.
export const getCourseVideoIds = async (): Promise<Set<string>> => {
  const { englishCourses, portugueseCourses } = await getCourses()
  const playlists = [...englishCourses, ...portugueseCourses]
  const idLists = await Promise.all(
    playlists.map((playlist) => getPlaylistVideoIds(playlist.id))
  )
  return new Set(idLists.flat())
}
