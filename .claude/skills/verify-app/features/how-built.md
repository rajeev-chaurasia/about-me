# Feature map — How This Page Was Built

- **Order:** 3rd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/HowBuilt.tsx`, `src/content/howBuilt.ts`
- **DOM:** `<section id="how-built">` with an `eyebrow` `<p>`, an `<h2>` heading and an intro `<p>`, then:
  - **Steps:** an `<ol>` with one `<li>` per step — a `Reveal` holding a mono number ("01"…) and an `<h3>` title with one `<p>` paragraph.
  - **Links:** a `<ul>` of `chip` links (each `target="_blank" rel="noopener noreferrer"`, with a GitHub mark for `repo` and `GitPullRequest` for `prs`).
  - **Field notes:** an `<h3>`, an intro `<p>`, and an `<ol>` of items — each a `Reveal` around a `card` `<div>` (hover: `border-muted` + 2px lift, no lift under reduced motion) with a mono number on the left, an `<h4>` title and a `<dl>` of 3 parts: "WHAT HAPPENED", "WHY IT MATTERS", "WHAT I'D SHIP" (mono labels; side by side from `md`, stacked below).
  - A closing `<ul>` of `tag` labels.
- **Content shape:** `HowBuiltContent { eyebrow, heading, intro, steps: BuildStep[], links: HowBuiltLink[], fieldNotes: { heading, intro, labels: { whatHappened, whyItMatters, whatIdShip }, notes: FieldNote[] }, tags: string[] }`, `BuildStep { title, body }`, `HowBuiltLink { label, href, kind: "repo" | "prs" }`, `FieldNote { title, whatHappened, whyItMatters, whatIdShip }`. Step titles, link hrefs, note titles and tags must be unique (used as React keys).
- **Checks:**
  - `drive.mjs` lists `how-built` third.
  - Exactly 4 steps and 4 field-note cards; each card has a non-empty "WHAT HAPPENED", "WHY IT MATTERS" and "WHAT I'D SHIP"; no `[Placeholder` text.
  - Every `<a>` in the section has `target="_blank"` and `rel="noopener noreferrer"`.
  - Code snippets or long URLs, if added, wrap or scroll inside their own box — never the page — at 320px.
