import type { Metadata } from "next"

import { BlogSearch } from "@/components/blog-search"
import { getArticles } from "@/data-access/blog"

export const metadata: Metadata = {
  title: "Blog | Daniel Bergholz",
  description: "Daniel Bergholz's blog"
}

export const revalidate = 3600 // 1 hour

export default async function Blog() {
  const articles = await getArticles()

  return (
    <main className="my-14 md:my-28 flex flex-col gap-5 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight">
        Blog
      </h1>
      <hr className="w-12 border-t border-current opacity-20" />
      <BlogSearch articles={articles} />
    </main>
  )
}
