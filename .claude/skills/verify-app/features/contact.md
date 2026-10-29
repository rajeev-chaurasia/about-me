# Feature map — Contact

- **Order:** 4th (last) of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Contact.tsx`, `src/content/contact.ts`
- **DOM:** `<section id="contact">` with an eyebrow `<p class="eyebrow">` ("04 · CONTACT"), an `<h2>` heading ("Get in touch"), a muted blurb `<p>` and a `<ul>` of exactly 4 links: email, LinkedIn, GitHub, Devpost, all inside one `<Reveal>` (the `<section id="contact">` stays outside it). The `<ul>` is a bordered, divided list; each link is a full-width row with an icon and a hover background.
- **Content shape:** `ContactContent { eyebrow, heading, blurb, links: ContactLink[] }`, `ContactLink { label, href, external, icon }`, where `icon` is `"mail" | "linkedin" | "github" | "devpost"` → lucide `Mail`, Brand `LinkedIn`, Brand `GitHub`, lucide `ArrowUpRight`. `href`s must be unique (used as React keys). `external: true` renders `target="_blank" rel="noopener noreferrer"`.
- **Checks:**
  - `drive.mjs` lists `contact` last.
  - Every link is a `mailto:` or absolute `https://` URL — no form posting to a server (static export has none). No phone number.
  - The 3 `https://` links (LinkedIn, GitHub, Devpost) carry `target="_blank"` and `rel="noopener noreferrer"`; the `mailto:` link does not.
  - No `[Placeholder` text in the section.
  - Long addresses wrap (`break-all`) at 320px.
  - Icons are decorative (`aria-hidden`); each row's accessible name is its label.
  - Under `prefers-reduced-motion: reduce` the section is visible with no Reveal transition.
