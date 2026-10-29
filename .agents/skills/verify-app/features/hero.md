# Feature map — Hero

- **Order:** 1st of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Hero.tsx`, `src/content/hero.ts`
- **DOM:** `<section id="hero">`; the page's only `<h1>` holds `hero.name`.
- **Content shape:** `HeroContent { name, line, chips: string[], school }` — no eyebrow label.
- **Styling:** chips use the `chip` utility in a wrapping `<ul>`; `school` is `text-muted`.
- **Checks:**
  - `drive.mjs` lists `hero` first.
  - The `<h1>` text equals `hero.name` (`report.json` → `headings[0]`).
  - At 320px a long name wraps (`break-words`) instead of widening the page.
  - The line, all 3 chips and the school line render; no `[Placeholder` text.
