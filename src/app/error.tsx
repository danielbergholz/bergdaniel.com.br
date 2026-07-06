"use client"

import { useEffect } from "react"

// biome-ignore lint/suspicious/noShadowRestrictedNames: Next.js error boundary convention
export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      id="main"
      className="my-14 md:my-28 max-w-2xl mx-auto flex flex-col gap-5 text-left"
    >
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight">
        Something went wrong
      </h1>
      <p className="text-sm md:text-base leading-relaxed opacity-60">
        We couldn&apos;t load this page right now. This is usually temporary —
        try again in a moment.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center min-h-11 rounded-sm bg-foreground px-5 py-2.5 text-xs uppercase tracking-widest text-background hover:opacity-80 transition-opacity"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center min-h-11 rounded-sm border border-current/30 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-current/60 transition-colors"
        >
          Go home
        </a>
      </div>
    </main>
  )
}
