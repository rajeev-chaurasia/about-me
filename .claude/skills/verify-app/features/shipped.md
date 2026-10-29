# Feature map — What I've Shipped

- **Order:** 2nd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Shipped.tsx`, `src/content/shipped.ts`
- **DOM:** `<section id="shipped">` with an `eyebrow` `<p>`, an `<h2>` heading, then two parts:
  - **Experience:** an `<h3>`, then an `<ol>` timeline inside one `Reveal`. Each role `<li>`: a dates · location `<p>` (above the role on mobile, a right-aligned left column at `sm+`), a vertical line + dot, an `<h4>` company with its lucide icon, a muted role line, a big stat `<p>`, a bullet `<ul>` and a `<ul>` of `tag` `<li>`s.
  - **Projects:** an `<h3>`, then a `<ul>` grid (1 column, 2 at `sm+`). Each `<li>` holds a `Reveal` around a `card` `<article>` (hover: `border-muted` + 2px lift, no lift under reduced motion): lucide icon, `<h4>` title, muted context line, big stat `<p>`, bullet `<ul>`, `tag` `<ul>`, and a `<ul>` of `chip` links (GitHub mark for `repo`, `ArrowUpRight` for `demo`).
  - Two closing `<p>` lines: the devpost hackathon link, and "NVIDIA Certified:" with two Credly links.
- **Content shape:** `ShippedContent { eyebrow, heading, experience: { heading, roles: ShippedRole[] }, projects: { heading, items: ShippedProject[] }, credits: { hackathons: { text, href }, certifications: { label, links: { label, href }[] } } }`, `ShippedRole { company, role, dates, location, icon: LucideIcon, stat, bullets, tags }`, `ShippedProject { title, context, icon: LucideIcon, stat, bullets, tags, links: ShippedLink[] }`, `ShippedLink { label, href, kind: "repo" | "demo" }`. Companies, titles, bullets, tags and hrefs must be unique within their list (used as React keys).
- **Content:** Experience, newest first — NVIDIA, Tekion Corp. Projects in order — Neo, Outpost, Penstock, ClaraCare. Then the hackathon and NVIDIA certification lines. Numbers are the owner's exact figures; never round or add metrics.
- **Checks:**
  - `drive.mjs` lists `shipped` second.
  - 2 timeline role `<li>`s and 4 project cards, one per entry in `shipped.experience.roles` / `shipped.projects.items`; no `[Placeholder` text.
  - Every external `<a>` has `target="_blank"` and `rel="noopener noreferrer"`.
  - The timeline and cards don't widen the page at 320px; dates sit above the role at 320px and in a left column at 1280px.
