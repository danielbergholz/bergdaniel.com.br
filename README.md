# bergdaniel.com.br

Daniel Bergholz's personal website — built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. It pulls in dynamic content from external APIs: course playlists from the YouTube Data API and blog articles from Dev.to.

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
- `YOUTUBE_CHANNEL_ID` — channel ID for fetching playlists
- `DEV_TO_API_KEY` — Dev.to API key for articles

Without these, the YouTube and Dev.to sections render empty.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run format` — format with Biome
- `npm run check` — run lint and typecheck

## Tech Stack

- **Framework:** Next.js 16 (App Router) with Server Components and ISR
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Instrument Serif + Poppins via `next/font`)
- **Tooling:** Biome for linting and formatting

## Project Structure

- `src/app/` — pages and layouts
- `src/components/` — reusable UI components
- `src/data-access/` — API integration layer (YouTube, Dev.to)
- `src/lib/` — types and utilities

> Working in this repo with an AI coding agent? See [`AGENTS.md`](./AGENTS.md).

## Deploy

Deployed on [Vercel](https://vercel.com). See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying) for details.
