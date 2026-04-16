import type { Metadata } from "next"

import { Article } from "@/components/article"
import { getArticles } from "@/data-access/blog"

export const metadata: Metadata = {
  title: "Blog | Daniel Bergholz",
  description: "Daniel Bergholz's blog"
}

export const revalidate = 86400 // 1 day

export default async function Blog() {
  const articles = await getArticles()

  return (
    <main className="my-14 md:my-28 flex flex-col gap-5 max-w-[830px] mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight">
        Blog
      </h1>
      <hr className="w-12 border-t border-current opacity-20" />
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <Article key={article.id} article={article} newPost={index === 0} />
        ))}
      </div>
    </main>
  )
}
