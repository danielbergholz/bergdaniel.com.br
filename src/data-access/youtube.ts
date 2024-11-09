import { Playlists } from "@/lib/types"

const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const BASE_URL = "https://www.googleapis.com/youtube/v3"
const PLAYLISTS_URL = `${BASE_URL}/playlists?part=snippet,contentDetails&maxResults=50&key=${API_KEY}&channelId=${CHANNEL_ID}`

const oneDay = 60 * 60 * 24

const getPlaylists = async () => {
  const response = await fetch(PLAYLISTS_URL, {
    next: {
      revalidate: oneDay
    }
  })
  const data: Playlists = await response.json()
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
