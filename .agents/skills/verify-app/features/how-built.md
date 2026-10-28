# Feature map — How This Page Was Built

- **Order:** 3rd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/HowBuilt.tsx`, `src/content/howBuilt.ts`
- **DOM:** `<section id="how-built">` with an `<h2>` heading and one `<p>` per paragraph.
- **Content shape:** `HowBuiltContent { heading, paragraphs: string[] }`. Paragraphs must be unique (used as React keys).
- **Checks:**
  - `drive.mjs` lists `how-built` third.
  - Paragraph count in the DOM equals `howBuilt.paragraphs.length`.
  - Code snippets or long URLs, if added, wrap or scroll inside their own box — never the page — at 320px.
