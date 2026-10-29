# Feature map — What I've Shipped

- **Order:** 2nd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Shipped.tsx`, `src/content/shipped.ts`
- **DOM:** `<section id="shipped">` with an `eyebrow` `<p>`, an `<h2>` heading, a `<ul>` of `card` `<li>`s, then one closing `<p>` line linking out. Each card: `<h3>` title, a muted context line, a bullet `<ul>`, a `<ul>` of `tag` `<li>`s, and (when `links` is set) a row of external `<a>`s.
- **Content shape:** `ShippedContent { eyebrow, heading, items: ShippedItem[], also: { text, href } }`, `ShippedItem { title, context, bullets: string[], tags: string[], links?: ShippedLink[] }`, `ShippedLink { label, href }`. Titles must be unique (used as React keys).
- **Content:** 5 cards in order — NVIDIA, Neo, Outpost, Tekion, Penstock — then the ClaraCare / devpost line. Numbers are the owner's exact figures; never round or add metrics.
- **Checks:**
  - `drive.mjs` lists `shipped` second.
  - One card `<li>` per entry in `shipped.items`; no `[Placeholder` text.
  - Every external `<a>` has `target="_blank"` and `rel="noopener noreferrer"`.
  - No card widens the page at 320px.
