# AGENTS.md

Conventions for AI coding agents working in **fredrin-apply**. `CLAUDE.md` is a
symlink to this file.

## Project

A single-page personal site: Next.js (App Router) + TypeScript (strict) +
Tailwind CSS v4, built as a static export (`out/`) and deployed on Vercel.

## Commands

| What | Command |
|---|---|
| Install | `npm install` |
| Dev server | `npm run dev` → http://localhost:3000 (port 3000) |
| Build (static export to `out/`) | `npm run build` |
| Lint | `npm run lint` |
| Typecheck | `npx tsc --noEmit` (also `npm run typecheck`) |
| Preview the built site | `npx --yes serve@14 out -l 4173` |

## File map

- `src/app/page.tsx` — the only page (`/`). Imports the 4 section components
  and renders them in order. Nothing else goes here.
- `src/app/layout.tsx` — root `<html>`/`<body>` and site metadata.
- `src/app/globals.css` — Tailwind import and global CSS variables.
- `src/components/sections/` — one component per section, in page order:
  `Hero.tsx`, `Shipped.tsx` (What I've Shipped), `HowBuilt.tsx` (How This
  Page Was Built), `Contact.tsx`.
- `src/content/` — one typed content file per section: `hero.ts`,
  `shipped.ts`, `howBuilt.ts`, `contact.ts`. Copy lives here, not in components.
- `.claude/skills/verify-app/` (mirrored in `.agents/skills/verify-app/`) — how
  to launch, drive and verify the site.

## Conventions

- 1 section = 1 component in `src/components/sections/` + 1 typed content file
  in `src/content/`. The component reads its content file; no copy inline.
- A section ticket edits only its own section's files unless its description
  says otherwise: its component, its content file, and its verify-app feature
  map (`.claude/skills/verify-app/features/<section>.md` plus the
  `.agents/skills/verify-app/features/` mirror), so the documented content
  shape stays current. Section tickets run in parallel — touching `page.tsx`,
  the layout, globals or another section's files causes merge conflicts.
- No new dependencies without calling it out in the PR description.
- Layout must not scroll horizontally at a 320px viewport.

## Traps

- Static export (`output: "export"`): no API routes, no route handlers, no
  server actions, no middleware, no `cookies()`/`headers()` or other
  server-only/runtime code. Everything must prerender at build time.
- `next/image` must use `unoptimized` (set globally in `next.config.ts`);
  there is no image optimization server.
- `next start` does not serve a static export — preview `out/` with a static
  server instead.
