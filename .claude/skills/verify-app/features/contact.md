# Feature map — Contact

- **Order:** 4th (last) of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Contact.tsx`, `src/content/contact.ts`
- **DOM:** `<section id="contact">` with an `<h2>` heading, a blurb `<p>` and a `<ul>` of links.
- **Content shape:** `ContactContent { heading, blurb, links: ContactLink[] }`, `ContactLink { label, href }`. `href`s must be unique (used as React keys).
- **Checks:**
  - `drive.mjs` lists `contact` last.
  - Every link is a `mailto:` or absolute `https://` URL — no form posting to a server (static export has none).
  - Long addresses wrap (`break-all`) at 320px.
