# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run format` - Format code with Biome
- `npm run check` - Run lint and typecheck (run this before committing)

**IMPORTANT**: After making any code changes, always run:
1. `npm run format` - Format the code
2. `npm run check` - Verify no linting or type errors

## Architecture Overview

This is a Next.js 15 personal website using the App Router with TypeScript and Tailwind CSS v4. The site integrates with external APIs to display dynamic content.

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/data-access/` - API integration layer (YouTube, Dev.to)
- `src/lib/` - Types and utilities

### Data Fetching Pattern

The site uses Server Components with ISR (24-hour revalidation) to fetch data from:

- **YouTube Data API v3** - Course playlists (`src/data-access/youtube.ts`)
- **Dev.to API** - Blog articles (`src/data-access/blog.ts`)

All data fetching happens at the page level, with results passed to components as props.

### Environment Setup

Required environment variables (see `.env.example`):

- `YOUTUBE_API_KEY` - YouTube Data API key
- `YOUTUBE_CHANNEL_ID` - Channel ID for fetching playlists
- `DEV_TO_API_KEY` - Dev.to API key for articles

### SEO & Performance

The site includes comprehensive SEO setup:

- Dynamic sitemap generation (`src/app/sitemap.ts`)
- Structured data (JSON-LD Person schema)
- ISR with revalidation for dynamic content
- Image optimization for YouTube thumbnails

### Styling

Uses Tailwind CSS v4 with PostCSS processing. Dark mode support is implemented via CSS custom properties in the root layout.

## MCP Tools

- **Context7 MCP** - Use to fetch updated documentation for libraries and frameworks like Next.js, Tailwind CSS, Shadcn and Radix-UI
- **Playwright MCP** - Use to check visual changes in the frontend with a real browser when UI modifications are made
