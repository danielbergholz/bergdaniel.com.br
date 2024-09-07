import { Article } from "@/lib/types"

const USERNAME = "danielbergholz"
const BASE_URL = "https://dev.to/api"
const ARTICLES_URL = `${BASE_URL}/articles?username=${USERNAME}`

export const getArticles = async () => {
  const response = await fetch(ARTICLES_URL)
  const articles: Article[] = await response.json()
  return articles
}
