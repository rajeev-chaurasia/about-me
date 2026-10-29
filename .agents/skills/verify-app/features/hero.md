# Feature map — Hero

- **Order:** 1st of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Hero.tsx`, `src/content/hero.ts`
- **DOM:** `<section id="hero">`; the page's only `<h1>` holds `hero.name`.
- **Content shape:** `HeroContent { name, line, chips: HeroChip[], email, github, linkedin, school }` — no eyebrow label. `HeroChip { label, status? }`; `status: true` (only "Available Jan 2027") adds a `pulse-dot bg-success` dot. `email`/`github`/`linkedin` are `HeroAction { label, href }` and use the same URLs as Contact.
- **Styling:** the section is `relative isolate` with an `aria-hidden` absolutely positioned radial glow (`bg-radial` from `accent`/`border` at low opacity) behind it. The `<h1>` is `text-4xl` on mobile, `sm:text-6xl sm:tracking-tighter` on desktop. Chips use the `chip` utility in a wrapping `<ul>`. Under the chips: an "Email me" primary link (`Mail` icon, `mailto:`) plus GitHub and LinkedIn icon-only links with `aria-label`s. `school` is `text-muted`.
- **Checks:**
  - `drive.mjs` lists `hero` first.
  - The `<h1>` text equals `hero.name` (`report.json` → `headings[0]`).
  - At 320px a long name wraps (`break-words`) instead of widening the page.
  - The line, all 3 chips and the school line render; no `[Placeholder` text.
  - The "Available Jan 2027" chip holds a `.pulse-dot`; the pulse is off under `prefers-reduced-motion: reduce`.
  - The GitHub and LinkedIn icon links have `aria-label`s and `target="_blank" rel="noopener noreferrer"`; the `mailto:` link does not open a new tab.
