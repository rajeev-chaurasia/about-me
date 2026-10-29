# Feature map — Hero

- **Order:** 1st of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Hero.tsx`, `src/content/hero.ts`
- **DOM:** `<section id="hero">`; the page's only `<h1>` holds `hero.name`.
- **Content shape:** `HeroContent { name, line, chips: HeroChip[], email, github, linkedin, school }` — no eyebrow label. `HeroChip { label, status? }`; `status: true` (only "Available January 2027") adds a `pulse-dot bg-success` dot. `email`/`github`/`linkedin` are `HeroAction { label, href }` and use the same URLs as Contact.
- **Styling:** the section is `relative isolate` (`px-5` mobile) with an `aria-hidden` absolutely positioned radial glow (`bg-radial-[closest-side_at_40%_40%]` from `accent`/`border` at low opacity) behind it; `closest-side` makes it fade fully to transparent before the section's edges, so it never reads as a box. The `<h1>` uses the display scale: `text-[32px]/[38px]` mobile, `sm:text-[48px]/[56px]`, `font-semibold`, `tracking-[-0.025em]`. `line` is the muted lead (16/26 → 18/30). Chips use the `chip` utility in a wrapping `<ul>`. Then `school` as a muted `font-mono` line, then an "Email me" primary link (`Mail` icon, `mailto:`) plus GitHub and LinkedIn icon-only links with `aria-label`s, all `rounded-lg`.
- **Checks:**
  - `drive.mjs` lists `hero` first.
  - The `<h1>` text equals `hero.name` (`report.json` → `headings[0]`).
  - The glow has no visible edges at 1280px and 1440px (background reaches the page color before the section's left/right edges).
  - At 320px a long name wraps (`break-words`) instead of widening the page.
  - The line, all 3 chips and the school line render; no `[Placeholder` text.
  - The "Available January 2027" chip holds a `.pulse-dot`; the pulse is off under `prefers-reduced-motion: reduce`.
  - The GitHub and LinkedIn icon links have `aria-label`s and `target="_blank" rel="noopener noreferrer"`; the `mailto:` link does not open a new tab.
