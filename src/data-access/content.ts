import { getArticles } from "@/data-access/blog"
import {
  getCollabVideos,
  getCourseVideoIds,
  getLatestVideos,
  getVideoDetails
} from "@/data-access/youtube"
import { buildContentFeed } from "@/lib/feed"
import type { ContentItem } from "@/lib/types"

// Fetches everything the merged feed needs, then hands off to the pure
// buildContentFeed (which does the pairing/filtering/sorting and is unit-tested).
// `body_markdown` is consumed in there and never returned, so the large article
// bodies don't reach the client.
export const getContentFeed = async (): Promise<ContentItem[]> => {
  const [videos, articles, courseVideoIds, collabVideos] = await Promise.all([
    getLatestVideos(50),
    getArticles(),
    getCourseVideoIds(),
    getCollabVideos()
  ])

  const details = await getVideoDetails([
    ...new Set([
      ...videos.map((video) => video.snippet.resourceId.videoId),
      ...collabVideos.map((video) => video.snippet.resourceId.videoId)
    ])
  ])

  return buildContentFeed(
    videos,
    articles,
    courseVideoIds,
    details,
    collabVideos
  )
}
