export type Article = {
  id: number
  title: string
  description: string
  readable_publish_date: string
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
}

type Thumbnail = {
  url: string
  width: number
  height: number
}
