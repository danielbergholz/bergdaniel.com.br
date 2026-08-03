import { notFound } from "next/navigation"

// Everything the proxy lets through lands under /[lang], so any path that
// doesn't match a real page falls into this catch-all and renders the
// localized not-found page with a real 404 status. That status depends on
// nothing flushing the response before this runs: there is deliberately no
// route-level loading.tsx above this segment (page skeletons live in
// per-page <Suspense> boundaries instead).
export default function CatchAll() {
  notFound()
}
