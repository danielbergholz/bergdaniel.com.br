import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { test } from "node:test"
import { siteRoutes } from "./routes.ts"

const appDir = path.join(import.meta.dirname, "..", "app", "[lang]")

// Collect every route that has a page.tsx under src/app/[lang]/, skipping
// dynamic segments (the [...rest] catch-all is a 404 handler, not a page).
function collectPages(dir: string, prefix: string): string[] {
  const routes: string[] = []
  if (fs.existsSync(path.join(dir, "page.tsx"))) {
    routes.push(prefix === "" ? "/" : prefix)
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("[")) continue
    routes.push(
      ...collectPages(path.join(dir, entry.name), `${prefix}/${entry.name}`)
    )
  }
  return routes
}

test("route registry matches the pages on disk", () => {
  const onDisk = collectPages(appDir, "").sort()
  const registered = siteRoutes.map((route) => route.path).sort()

  assert.deepEqual(
    registered,
    onDisk,
    "src/lib/routes.ts must list exactly the pages under src/app/[lang]/ — add new pages to the registry (the sitemap is generated from it)"
  )
})

test("route registry has no duplicates", () => {
  const paths = siteRoutes.map((route) => route.path)
  assert.equal(new Set(paths).size, paths.length)
})
