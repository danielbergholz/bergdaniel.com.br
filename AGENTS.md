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
- Routes in `src/app/sitemap.ts` are listed by hand — when you add a page under `src/app/`, add its URL there too.
- Tests use Node's built-in runner (`node --test`, no extra deps; needs Node 24+, which runs TypeScript directly). Keep business logic pure and I/O-free — e.g. the feed pairing/filtering lives in `src/lib/feed.ts` and is unit-tested with fixtures, while `src/data-access/` modules stay thin `fetch` wrappers. Co-locate tests as `*.test.ts`.

## Cursor Cloud specific instructions

- Node 24+ is required (the `npm test` runner strips TypeScript types natively, which fails on older Node). The base VM ships an older `/exec-daemon/node` that would win in `PATH`, so the startup/update script installs Node 24 via `nvm` and symlinks `node`/`npm`/`npx` into `/usr/local/cargo/bin` (which is ahead of `/exec-daemon` in `PATH`). After startup, `node -v` should report v24.x — if it reports v22.x, re-run the symlink step. `.bashrc` PATH edits do NOT work here because the exec wrapper prepends `/exec-daemon` after `.bashrc` runs.
- Standard commands are in `README.md` / the "After any code change" section above. Dev server: `npm run dev` (port 3000).
- API keys (`YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID`, `DEV_TO_API_KEY`) are required for the data-backed pages and for `npm run build`. Without them, `/` `/videos` `/courses` `/work-with-me` throw and render the error boundary, and `npm run build` fails at prerender (by design — the data layer throws on bad API responses so ISR never caches an empty page). The static pages `/links` and `/products` render fine without keys.
- Known environment limitation: dev.to sits behind Cloudflare bot protection that blocks Node's `fetch`/undici from this cloud VM's IP (returns 401 even with valid key + browser headers; `curl` works, Node does not — it's a TLS-fingerprint block, not a header/key problem). So `getArticles` fails here, which means `/` and `/videos` hit the error boundary and a full `npm run build` cannot complete in this environment (it errors prerendering `/`). This is external infra, not a code bug — the site builds/deploys fine on Vercel. YouTube-only pages (`/courses`, `/work-with-me`) and the static pages work, so use those to exercise live data locally. The YouTube API also short-term rate-limits (403) under bursty parallel calls (e.g. repeated builds); wait ~30s and retry.
- tmux gotcha: the tmux server daemon starts before secrets are injected, so panes created later inherit a stale env WITHOUT the API keys. When launching the dev server in tmux, pass the keys explicitly, e.g. `tmux new-session ... -e "YOUTUBE_API_KEY=$YOUTUBE_API_KEY" -e "YOUTUBE_CHANNEL_ID=$YOUTUBE_CHANNEL_ID" -e "DEV_TO_API_KEY=$DEV_TO_API_KEY"`. Running `npm run dev` directly from a normal Shell (non-tmux) already has the env.
