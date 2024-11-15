export type Article = {
  id: number
  title: string
  description: string
  published_at: string
  url: string
  cover_image: string
  social_image: string
  reading_time_minutes: number
  tag_list: string[]
}

export type Playlists = {
  items: Video[]
}

export type Video = {
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
}

type ContentDetails = {
  itemCount: number
}

type Snippet = {
  publishedAt: string
  title: string
  description: string
  thumbnails: Thumbnails
}

type Thumbnails = {
  default: Thumbnail
  standard: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  maxres: Thumbnail
}

type Thumbnail = {
  url: string
  width: number
  height: number
}
