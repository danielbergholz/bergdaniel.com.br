import type { Metadata } from "next"

import { getArticles } from "@/data-access/blog"
import { Article } from "@/components/article"

export const metadata: Metadata = {
  title: "Blog | Daniel Bergholz",
  description: "Daniel Bergholz's blog"
}

export const revalidate = 60 * 60 * 24 * 7 // one week

export default async function Blog() {
  const articles = await getArticles()

  return (
    <main className="my-20 md:my-36 flex flex-col gap-4">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </main>
  )
}
