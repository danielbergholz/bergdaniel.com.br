# bergdaniel.com.br

Daniel Bergholz's personal website — built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. It pulls in dynamic content from external APIs: videos and course playlists from the YouTube Data API and articles from Dev.to.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment variables

Copy `.env.example` to `.env` and fill in:

- `YOUTUBE_API_KEY` — YouTube Data API key
- `YOUTUBE_CHANNEL_ID` — channel ID for fetching videos and playlists
- `DEV_TO_API_KEY` — Dev.to API key for articles

All three are required. The data-access layer throws on a failed API response (so a broken or empty page is never cached), so the build will error if a key is missing or invalid.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run format` — format with Biome
- `npm run check` — run lint and typecheck
- `npm test` — run unit tests (Node's built-in test runner)

## Tech Stack

- **Framework:** Next.js 16 (App Router) with Server Components and ISR
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Instrument Serif + Poppins via `next/font`)
- **Tooling:** Biome for linting and formatting
- **Testing:** Node.js built-in test runner (`node --test`, no extra dependencies)

## Project Structure

- `src/app/` — pages and layouts
- `src/components/` — reusable UI components
- `src/data-access/` — API integration layer (YouTube, Dev.to)
- `src/lib/` — types, utilities, and the pure feed logic (`feed.ts`), with co-located `*.test.ts` unit tests

> Working in this repo with an AI coding agent? See [`AGENTS.md`](./AGENTS.md).

## Deploy

Deployed on [Vercel](https://vercel.com). See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying) for details.
