# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vietnamese translation website for Re:Zero Arc 6 with click-to-reveal English translation. Built with Next.js 16 (App Router), deployed on Vercel.

## Commands

```bash
pnpm dev      # Dev server at http://localhost:3000
pnpm build    # Production build (SSG for all chapter pages)
pnpm lint     # ESLint
```

## Architecture

- **Framework**: Next.js 16 App Router with TypeScript, Tailwind CSS v4
- **Content**: MDX files compiled at build time via `next-mdx-remote/rsc`
- **Deployment**: Vercel with Git integration — push to `master` triggers deploy

### Content pipeline

MDX files in `content/arc6/` → `compileMDX` in Server Component → static HTML with client-side hydration for interactivity.

### Key components

- `src/components/Word.tsx` — `'use client'`, click to show English tooltip (desktop: popover, mobile: bottom bar)
- `src/components/Sentence.tsx` — `'use client'`, click to reveal English translation block
- `src/components/ChapterLayout.tsx` — server component, chapter shell with prev/next nav
- `src/components/ChapterCard.tsx` — server component, card for home page listing

### Chapter registry

`src/lib/chapters.ts` — single source of truth for all chapters. Powers `generateStaticParams`, home page listing, and prev/next navigation. Add a new entry here when creating new chapter content.

### Adding a chapter

1. Create `content/arc6/chuong-NN.mdx` with YAML frontmatter (`title`, `chapter`, `arc`) and body using `<Sentence en="...">` and `<Word en="...">`
2. Add the chapter entry to the `chapters` array in `src/lib/chapters.ts`

### Vietnamese language

All UI text and content is in Vietnamese. The HTML root uses `lang="vi"`.
