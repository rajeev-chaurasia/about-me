---
name: verify-app
description: Launch, drive and verify this personal site (Next.js static export) end to end — build `out/`, serve it, load `/` in headless Chrome at 320px and 1280px, assert the 4 sections render in order with no horizontal scroll, and capture screenshots as evidence. Use before finishing any ticket that changes the site, or when asked to run, check, screenshot or verify the app.
---

# verify-app

The site is one static page. Verifying it means: build the static export,
serve `out/`, drive `/` in a real browser, keep the evidence, tear down.
Run every command from the repo root.

## Launch

```sh
npm install                      # only if node_modules is missing
npm run build                    # static export → out/  (must exit 0)
npx --yes serve@14 out -l 4173 > .fredrin/tmp/serve.log 2>&1 &
```

Run the server in the background (a background command in your runtime, or
the trailing `&`). The built export is what Vercel ships, so verify it rather
than `npm run dev`; use the dev server on port 3000 only for quick iteration.
`next start` does **not** work with `output: "export"`.

## Doctor

Confirm the environment before driving; fix the first failure before going on.

```sh
node -v                                            # >= 22 (drive.mjs needs global WebSocket)
test -f out/index.html && echo out-ok              # build produced the page
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4173/   # expect 200
```

- No Chrome found → set `CHROME_PATH` to a Chrome/Chromium binary.
- Port 4173 busy → `lsof -ti tcp:4173` to see who holds it; pick another port
  and pass the URL to `drive.mjs`.

## Drive

```sh
node .claude/skills/verify-app/scripts/drive.mjs http://localhost:4173/ .fredrin/tmp/verify-app
```

For each viewport (320px, 1280px) it loads `/` in headless Chrome and checks:

- `main > section` ids are exactly `hero, shipped, how-built, contact`, in order;
- `document.documentElement.scrollWidth <= window.innerWidth` (no horizontal scroll).

It prints one line per width and ends `VERIFY-APP: PASS` (exit 0) or
`VERIFY-APP: FAIL` (exit 1). Section-specific checks live in the feature maps:

| Section | Feature map |
|---|---|
| Hero | [features/hero.md](features/hero.md) |
| What I've Shipped | [features/shipped.md](features/shipped.md) |
| How This Page Was Built | [features/how-built.md](features/how-built.md) |
| Contact | [features/contact.md](features/contact.md) |

A section ticket reads its own feature map, updates it (both copies) when its
content shape or checks change, and confirms those checks too — in
the screenshots, or by grepping `out/index.html` for its copy.

## Evidence

`drive.mjs` writes to the output dir (default `.fredrin/tmp/verify-app/`,
git-ignored):

- `home-320.png`, `home-1280.png` — full-page screenshots; open them and look.
- `report.json` — section ids, headings, scroll widths, pass/fail per width.

Report the real exit codes of `npm run build` and `drive.mjs`. On a Fredrin
ticket, attach the screenshots with `ticket upload` when a reviewer should see
the change.

## Cleanup

```sh
lsof -ti tcp:4173 | xargs kill 2>/dev/null; true   # stop the static server
```

Leave `out/` and `.fredrin/tmp/` alone — both are git-ignored. Never commit
screenshots or `out/`.
