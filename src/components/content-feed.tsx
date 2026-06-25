"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useRef, useState } from "react"

import { ContentCard } from "@/components/content-card"
import type { ContentItem } from "@/lib/types"

type Props = {
  items: ContentItem[]
}

// How many of the newest items get the large full-width "featured" treatment
// (only in the default, unsearched view).
const FEATURED_COUNT = 4

function matches(item: ContentItem, query: string): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return item.title.toLowerCase().includes(q)
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
        placeholder="Search videos and articles..."
        aria-label="Search videos and articles"
        className="w-full rounded-lg border border-current/10 dark:border-current/20 bg-transparent pl-10 pr-4 py-2.5 text-sm md:text-base outline-none focus:border-current/30 dark:focus:border-current/40 transition-colors"
      />
    </div>
  )
}

function ContentFeedInner({ items }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryFromUrl = searchParams?.get("q") ?? ""

  const [inputValue, setInputValue] = useState(queryFromUrl)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keep input in sync when navigating back/forward. Skip when the URL already
  // reflects the current input so the visible value doesn't shift mid-typing.
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
    router.replace(queryString ? `/videos?${queryString}` : "/videos", {
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
    ? items.filter((item) => matches(item, inputValue))
    : items

  return (
    <div className="flex flex-col gap-5">
      <SearchInput value={inputValue} onChange={handleChange} />
      {filtered.length === 0 ? (
        <p className="opacity-50 text-sm md:text-base">
          No results for &ldquo;{inputValue.trim()}&rdquo;.
        </p>
      ) : isSearching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {filtered.slice(0, FEATURED_COUNT).map((item) => (
              <ContentCard key={item.id} item={item} featured />
            ))}
          </div>
          {filtered.length > FEATURED_COUNT && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.slice(FEATURED_COUNT).map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export function ContentFeed(props: Props) {
  return (
    <Suspense fallback={null}>
      <ContentFeedInner {...props} />
    </Suspense>
  )
}
