# Feature map — What I've Shipped

- **Order:** 2nd of 4.
- **Files (a section ticket edits only these, plus this feature map and its mirror):** `src/components/sections/Shipped.tsx`, `src/content/shipped.ts`
- **DOM:** `<section id="shipped">` with a mono `eyebrow` `<p>`, an `<h2>` heading (24/32 → 32/40, semibold, `-0.02em`), then two parts:
  - **Experience:** an `<h3>`, then an `<ol>` timeline inside one `Reveal`. Each role `<li>`: a mono dates · location `<p>` (above the role on mobile, a `sm:w-44` left column at `sm+`; dates and location are `whitespace-nowrap`), a vertical line + dot, an `<h4>` company with its lucide icon, a muted role line, a stat `<p>`, a muted dash-marker bullet `<ul>` (body 14/22 → 15/24) and a `<ul>` of mono `tag` `<li>`s.
  - **Projects:** an `<h3>`, then a single-column `<ul>` (`space-y-6`, every width). Each `<li>` holds a `Reveal` around a `card` `<article>` (hover: `border-muted` + 2px lift, no lift under reduced motion): lucide icon in a bordered `rounded-lg` tile, `<h4>` title (the part before the first " · " semibold, the rest muted), mono muted context line, stat `<p>`, bullet `<ul>` (small 13/20 → 14/22), `tag` `<ul>`, and a `<ul>` of `chip rounded-md` links (GitHub mark for `repo`, `ArrowUpRight` for `demo`).
  - **Stats:** a `<p>` holding a big `font-semibold tabular-nums` value (26px mobile; 32px in roles, 28px in cards at `sm+`) and a small muted label on the same baseline; its text reads `value + " " + label`, e.g. "0 unsafe skips".
  - Two closing `<p>` lines: the devpost hackathon link, and "NVIDIA-certified:" with two Credly links.
- **Content shape:** `ShippedContent { eyebrow, heading, experience: { heading, roles: ShippedRole[] }, projects: { heading, items: ShippedProject[] }, credits: { hackathons: { text, href }, certifications: { label, links: { label, href }[] } } }`, `ShippedStat { value, label }`, `ShippedRole { company, role, dates, location, icon: LucideIcon, stat: ShippedStat, bullets, tags }`, `ShippedProject { title, context, icon: LucideIcon, stat: ShippedStat, bullets, tags, links: ShippedLink[] }` (`title` is "Name · description"), `ShippedLink { label, href, kind: "repo" | "demo" }`. Companies, titles, bullets, tags and hrefs must be unique within their list (used as React keys).
- **Content:** Experience, newest first — NVIDIA, Tekion Corp. Projects in order — Neo, Outpost, Penstock, ClaraCare. Then the hackathon and NVIDIA certification lines. Numbers are the owner's exact figures; never round or add metrics. Copy is final and word for word; no "+" meaning "and" (numeric "+" like 1,000+, 200+, 4M+ stays).
- **Checks:**
  - `drive.mjs` lists `shipped` second.
  - 2 timeline role `<li>`s and 4 project cards, one per entry in `shipped.experience.roles` / `shipped.projects.items`; no `[Placeholder` text.
  - Every external `<a>` has `target="_blank"` and `rel="noopener noreferrer"`.
  - The timeline and cards don't widen the page at 320px; dates sit above the role at 320px and in a left column at 1280px, each date on one line.
  - At 1280px all 4 project cards share the same left edge and width (one column).
