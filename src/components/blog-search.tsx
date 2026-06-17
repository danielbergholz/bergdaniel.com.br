"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useRef, useState } from "react"

import { Article } from "@/components/article"
import type { Article as ArticleType } from "@/lib/types"

type Props = {
  articles: ArticleType[]
}

function matches(article: ArticleType, query: string): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const haystack = [
    article.title,
    article.description,
    ...(article.tag_list ?? [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  return haystack.includes(q)
}

function SearchInput({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative w-full">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          role="img"
          aria-label="Search"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.34-4.34m0 0A7.5 7.5 0 1 0 6.06 6.06a7.5 7.5 0 0 0 10.6 10.6Z"
          />
        </svg>
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search articles..."
        aria-label="Search articles"
        className="w-full rounded-lg border border-current/10 dark:border-current/20 bg-transparent pl-10 pr-4 py-2.5 text-sm md:text-base outline-none focus:border-current/30 dark:focus:border-current/40 transition-colors"
      />
    </div>
  )
}

function BlogSearchInner({ articles }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryFromUrl = searchParams?.get("q") ?? ""

  const [inputValue, setInputValue] = useState(queryFromUrl)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keep input in sync when navigating back/forward. Skip when the URL already
  // reflects the current input (e.g. trailing whitespace stripped on write) so
  // the visible value doesn't shift under the cursor mid-typing.
  // biome-ignore lint/correctness/useExhaustiveDependencies: only re-sync on URL changes, not every keystroke
  useEffect(() => {
    if (queryFromUrl === inputValue.trim()) return
    setInputValue(queryFromUrl)
  }, [queryFromUrl])

  const updateUrl = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "")
    if (value.trim()) {
      params.set("q", value.trim())
    } else {
      params.delete("q")
    }
    const queryString = params.toString()
    router.replace(queryString ? `/blog?${queryString}` : "/blog", {
      scroll: false
    })
  }

  const handleChange = (value: string) => {
    setInputValue(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      updateUrl(value)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const isSearching = inputValue.trim().length > 0
  const filtered = isSearching
    ? articles.filter((article) => matches(article, inputValue))
    : articles

  return (
    <div className="flex flex-col gap-5">
      <SearchInput value={inputValue} onChange={handleChange} />
      {filtered.length === 0 ? (
        <p className="opacity-50 text-sm md:text-base">
          No articles found for &ldquo;{inputValue.trim()}&rdquo;.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((article, index) => (
            <Article
              key={article.id}
              article={article}
              newPost={!isSearching && index === 0}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function BlogSearch(props: Props) {
  return (
    <Suspense fallback={null}>
      <BlogSearchInner {...props} />
    </Suspense>
  )
}
