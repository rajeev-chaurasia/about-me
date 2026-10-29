# Feature map — How This Page Was Built

- **Order:** 3rd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/HowBuilt.tsx`, `src/content/howBuilt.ts`
- **DOM:** `<section id="how-built">` with an `eyebrow` `<p>`, an `<h2>` heading, then two parts:
  - **The build:** an `<h3>`, a `<ul>` with one `<li>` per point, and a `<ul>` of `chip` links (each `target="_blank" rel="noopener noreferrer"`, with a GitHub mark for `repo` and `GitPullRequest` for `prs`).
  - **Field notes:** an `<h3>`, an intro `<p>`, and an `<ol>` of items — each a `Reveal` around a `card` `<div>` (hover: `border-muted` + 2px lift, no lift under reduced motion) holding an `<h4>` title and a `<dl>` with "What happened" and "Fix".
  - A closing `<ul>` of `tag` labels.
- **Content shape:** `HowBuiltContent { eyebrow, heading, build: { heading, points: string[], links: HowBuiltLink[] }, fieldNotes: { heading, intro, notes: FieldNote[] }, tags: string[] }`, `HowBuiltLink { label, href, kind: "repo" | "prs" }`, `FieldNote { title, whatHappened, fix }`. Points, link hrefs, note titles and tags must be unique (used as React keys).
- **Checks:**
  - `drive.mjs` lists `how-built` third.
  - Exactly 3 field-note cards, each with a non-empty "What happened" and "Fix"; no `[Placeholder` text.
  - Every `<a>` in the section has `target="_blank"` and `rel="noopener noreferrer"`.
  - Code snippets or long URLs, if added, wrap or scroll inside their own box — never the page — at 320px.
