import type { Article } from "@/lib/types"

const BASE_URL = "https://dev.to/api"
const ARTICLES_URL = `${BASE_URL}/articles/me/published`
const API_KEY = process.env.DEV_TO_API_KEY

export const getArticles = async () => {
  const response = await fetch(ARTICLES_URL, {
    headers: {
      "api-key": API_KEY
    } as HeadersInit
  })
  const articles: Article[] = await response.json()
  return articles
}
