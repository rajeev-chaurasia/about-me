# Feature map — What I've Shipped

- **Order:** 2nd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Shipped.tsx`, `src/content/shipped.ts`
- **DOM:** `<section id="shipped">` with an `<h2>` heading and a `<ul>` of items, each an `<h3>` title (linked when `href` is set) and a description.
- **Content shape:** `ShippedContent { heading, items: ShippedItem[] }`, `ShippedItem { title, description, href? }`. Titles must be unique (used as React keys).
- **Checks:**
  - `drive.mjs` lists `shipped` second.
  - One `<li>` per entry in `shipped.items`; every `href` resolves.
  - No item widens the page at 320px.
