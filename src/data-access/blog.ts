const USERNAME = "danielbergholz"
const BASE_URL = "https://dev.to/api"
const ARTICLES_URL = `${BASE_URL}/articles?username=${USERNAME}`

type Article = {
  id: number
  title: string
  description: string
  readable_publish_date: string
  url: string
  social_image: string
  reading_time_minutes: number
  tag_list: string[]
}

export const getArticles = async () => {
  const response = await fetch(ARTICLES_URL)
  const articles: Article[] = await response.json()
  return articles
}
