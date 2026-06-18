import type { ChannelStats, Playlists } from "@/lib/types"

const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const BASE_URL = "https://www.googleapis.com/youtube/v3"
const PLAYLISTS_URL = `${BASE_URL}/playlists?part=snippet,contentDetails&maxResults=50&key=${API_KEY}&channelId=${CHANNEL_ID}`
const CHANNEL_URL = `${BASE_URL}/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`

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
