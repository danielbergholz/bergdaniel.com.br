import type { Metadata } from "next"

import { getArticles } from "@/data-access/blog"
import { Article } from "@/components/article"

export const metadata: Metadata = {
  title: "Blog | Daniel Bergholz",
  description: "Daniel Bergholz's blog"
}

export const revalidate = 86400 // 1 day

export default async function Blog() {
  const articles = await getArticles()

  return (
    <main className="my-14 md:my-32 flex flex-col gap-4">
      {articles.map((article, index) => (
        <Article key={article.id} article={article} newPost={index === 0} />
      ))}
    </main>
  )
}
