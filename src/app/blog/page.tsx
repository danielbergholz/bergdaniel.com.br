import type { Metadata } from "next"
import { getArticles } from "@/data-access/blog"

export const metadata: Metadata = {
  title: "Blog | Daniel Bergholz",
  description: "Daniel Bergholz's blog"
}

export const revalidate = 60 * 60 * 24 * 7 // one week

export default async function Blog() {
  const articles = await getArticles()

  return (
    <main>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </main>
  )
}
