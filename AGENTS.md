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
3. `npm run build` — production build

Don't skip the build. Lint and typecheck miss Next.js structural rules (e.g. `pages/` and `app/` colocation); only the build catches them. This matters most when adding or moving files, adding dependencies, or touching `next.config.mjs`, `src/proxy.ts`, or `src/instrumentation.ts`.

## Conventions

- Data is fetched in Server Components at the page level (with ISR), then passed to components as props. API integrations live in `src/data-access/` (YouTube Data API, Dev.to).
- Routes in `src/app/sitemap.ts` are listed by hand — when you add a page under `src/app/`, add its URL there too.
