# Feature map — Contact

- **Order:** 4th (last) of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Contact.tsx`, `src/content/contact.ts`
- **DOM:** `<section id="contact">` with an eyebrow `<p class="eyebrow">` ("04 · CONTACT"), an `<h2>` heading ("Get in touch"), a muted blurb `<p>` and a `<ul>` of exactly 4 links: email, LinkedIn, GitHub, Devpost.
- **Content shape:** `ContactContent { eyebrow, heading, blurb, links: ContactLink[] }`, `ContactLink { label, href, external }`. `href`s must be unique (used as React keys). `external: true` renders `target="_blank" rel="noopener noreferrer"`.
- **Checks:**
  - `drive.mjs` lists `contact` last.
  - Every link is a `mailto:` or absolute `https://` URL — no form posting to a server (static export has none). No phone number.
  - The 3 `https://` links (LinkedIn, GitHub, Devpost) carry `target="_blank"` and `rel="noopener noreferrer"`; the `mailto:` link does not.
  - No `[Placeholder` text in the section.
  - Long addresses wrap (`break-all`) at 320px.
