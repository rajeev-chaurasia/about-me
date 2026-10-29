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

- `src/app/page.tsx` — the only page (`/`). Renders `Nav` and the 4 section components
  in order inside `<main>`. Nothing else goes here.
- `src/app/layout.tsx` — root `<html>`/`<body>` and site metadata.
- `src/app/globals.css` — Tailwind import and global CSS variables.
- `src/app/icon.svg`, `apple-icon.png`, `opengraph-image.png` (+ `.alt.txt`) —
  favicon, touch icon and 1200x630 share image, copied into `out/` as-is.
- `src/components/Nav.tsx` — sticky top nav; `Reveal.tsx` — scroll-in motion;
  `icons/Brand.tsx` — GitHub/LinkedIn icons.
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

## Design

Dark + minimal, always dark (no light theme). Tokens and utilities live in
`src/app/globals.css`; the system font stack is kept (no font loader).

Color tokens (`@theme`, so each has matching utilities like `bg-*`, `text-*`,
`border-*`):

| Token | Purpose |
|---|---|
| `background` | Near-black page background. |
| `foreground` | Off-white primary text. |
| `muted` | Gray for secondary text. |
| `border` | Subtle borders and dividers. |
| `accent` | Soft yellow — only for small tags/labels, nowhere else. |
| `success` | Soft green — only for the "available" status dot. |

Shared utilities:

| Utility | Purpose |
|---|---|
| `eyebrow` | Small uppercase muted label, e.g. "02 · WHAT I'VE SHIPPED". |
| `card` | Bordered, rounded, padded box on the background. |
| `chip` | Neutral bordered pill, e.g. "Available Jan 2027". |
| `tag` | Small accent-colored label (the one use of `accent`). |
| `pulse-dot` | Small round dot with a gentle pulse (off under reduced motion). Add a color: `<span className="pulse-dot bg-success" />`. |

A global `:focus-visible` outline (foreground) is set in `globals.css`; don't
remove focus styles in components.

Icons:

- General icons come from `lucide-react`, e.g.
  `import { Mail } from "lucide-react"` → `<Mail size={16} />`.
- Brand marks lucide doesn't ship live in `src/components/icons/Brand.tsx`
  (`GitHub`, `LinkedIn`). They take the same props as lucide icons (`size`,
  `strokeWidth`, `className`, ...) so the two mix freely.
- Icons are decorative by default (`aria-hidden`); give the link or button
  around them an accessible name.

Motion:

- Wrap a block in `<Reveal>` (`src/components/Reveal.tsx`) to fade it in and
  lift it ~8px when it scrolls into view. Optional `delay` (ms) staggers
  siblings. Content is visible without JS and under reduced motion.
- Rule: motion is subtle and always respects reduced motion — no animation
  libraries, no 3D.

Rule: `src/components/sections/*` and `src/content/*` use only these tokens and
utilities (plus Tailwind's layout/spacing/type utilities) — no raw hex values,
arbitrary colors or one-off palette colors.

## Traps

- Static export (`output: "export"`): no API routes, no route handlers, no
  server actions, no middleware, no `cookies()`/`headers()` or other
  server-only/runtime code. Everything must prerender at build time.
- `next/image` must use `unoptimized` (set globally in `next.config.ts`);
  there is no image optimization server.
- `next start` does not serve a static export — preview `out/` with a static
  server instead.
