# AGENTS.md

Guidance for AI coding agents working in this repo. For the human-facing overview (stack, scripts, structure, env vars), see [README.md](./README.md).

<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

## After any code change

Run in order:

1. `npm run format` — format with Biome
2. `npm run check` — lint + typecheck
3. `npm test` — unit tests (Node's built-in runner)
4. `npm run build` — production build

Don't skip the build. Lint and typecheck miss Next.js structural rules (e.g. `pages/` and `app/` colocation); only the build catches them. This matters most when adding or moving files, adding dependencies, or touching `next.config.mjs`.

## Conventions

- Data is fetched in Server Components at the page level (with ISR), then passed to components as props. API integrations live in `src/data-access/` (YouTube Data API, Dev.to).
- i18n: the site is bilingual (pt-BR default at the root, English under `/en`), hand-rolled with no i18n library. Pages live under `src/app/[lang]/`; `src/proxy.ts` rewrites unprefixed paths to `/pt` internally and 308-redirects public `/pt/...` URLs. UI strings live in `src/dictionaries/{pt,en}.json` (loaded server-side only — client components receive strings as props); locale helpers are in `src/lib/i18n.ts`. When you add or change a string, update BOTH dictionaries — a unit test fails if their shapes diverge.
- The sitemap is generated from the route registry in `src/lib/routes.ts` — when you add a page under `src/app/[lang]/`, register it there (a unit test fails if the registry and the filesystem disagree).
- Do not add a route-level `loading.tsx` above `src/app/[lang]/[...rest]/` — an early-flushed loading shell turns real 404s into soft 404s (status 200). Page skeletons go in per-page `<Suspense>` boundaries instead.
- Tests use Node's built-in runner (`node --test`, no extra deps; needs Node 24+, which runs TypeScript directly). Keep business logic pure and I/O-free — e.g. the feed pairing/filtering lives in `src/lib/feed.ts` and is unit-tested with fixtures, while `src/data-access/` modules stay thin `fetch` wrappers. Co-locate tests as `*.test.ts`. Note: Node's runner doesn't resolve the `@/` path alias, so modules imported by tests must use relative imports (`./i18n.ts`).
