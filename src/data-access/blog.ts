import type { Article } from "@/lib/types"

const BASE_URL = "https://dev.to/api"
// per_page=1000 so the merged feed sees every post (the default is only 30).
const ARTICLES_URL = `${BASE_URL}/articles/me/published?per_page=1000`
const API_KEY = process.env.DEV_TO_API_KEY

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch(ARTICLES_URL, {
    headers: {
      "api-key": API_KEY
    } as HeadersInit
  })

  // Throw on any bad response so ISR keeps serving the last healthy page.
  // The "keep last good version" fallback only triggers on a thrown error —
  // a parseable-but-wrong body (e.g. a 429/401 error object) would otherwise
  // be cached as healthy and break the client-side render.
  if (!response.ok) {
    throw new Error(`dev.to API error: ${response.status}`)
  }

  const data = await response.json()
  if (!Array.isArray(data)) {
    throw new Error("dev.to API: expected an array of articles")
  }

  return data as Article[]
}
