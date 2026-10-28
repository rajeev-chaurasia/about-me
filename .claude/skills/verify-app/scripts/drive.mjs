#!/usr/bin/env node
// Drive the running site in headless Chrome over the DevTools Protocol and
// assert the page contract: the 4 sections in order, no horizontal scroll.
// No npm dependencies — needs Node >= 22 (global WebSocket) and a Chrome.
//
// Usage: node drive.mjs [url] [outDir]
//   url     default http://localhost:4173/
//   outDir  default .fredrin/tmp/verify-app (screenshots + report.json)
// Env: CHROME_PATH overrides the browser binary.

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2] ?? "http://localhost:4173/";
const outDir = process.argv[3] ?? ".fredrin/tmp/verify-app";
const EXPECTED = ["hero", "shipped", "how-built", "contact"];
const WIDTHS = [320, 1280];

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error("No Chrome found — set CHROME_PATH");
  return found;
}

async function waitForDevtools(port) {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error("Chrome DevTools endpoint did not come up");
}

function cdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) {
        reject(new Error(msg.error.message));
      } else {
        resolve(msg.result);
      }
    } else if (msg.method && listeners.has(msg.method)) {
      listeners.get(msg.method)(msg.params);
      listeners.delete(msg.method);
    }
  };
  return {
    open: new Promise((r) => (ws.onopen = r)),
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        pending.set(++id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    },
    once(method) {
      return new Promise((r) => listeners.set(method, r));
    },
    close: () => ws.close(),
  };
}

const port = 9300 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), "verify-app-"));
const chrome = spawn(
  findChrome(),
  [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--hide-scrollbars",
    "about:blank",
  ],
  { stdio: "ignore" },
);

let failed = false;
const report = { url, results: [] };
try {
  await waitForDevtools(port);
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const page = targets.find((t) => t.type === "page");
  const c = cdp(page.webSocketDebuggerUrl);
  await c.open;
  await c.send("Page.enable");
  await c.send("Runtime.enable");
  mkdirSync(outDir, { recursive: true });

  for (const width of WIDTHS) {
    await c.send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 768,
    });
    const loaded = c.once("Page.loadEventFired");
    await c.send("Page.navigate", { url });
    await loaded;
    const { result } = await c.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => ({
        sections: [...document.querySelectorAll("main > section")].map((s) => s.id),
        headings: [...document.querySelectorAll("main > section :is(h1,h2)")].map((h) => h.textContent),
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }))()`,
    });
    const v = result.value;
    const orderOk = JSON.stringify(v.sections) === JSON.stringify(EXPECTED);
    const noHScroll = v.scrollWidth <= v.innerWidth;
    const shot = await c.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
    });
    const shotPath = join(outDir, `home-${width}.png`);
    writeFileSync(shotPath, Buffer.from(shot.data, "base64"));
    report.results.push({ width, ...v, orderOk, noHScroll, screenshot: shotPath });
    console.log(
      `${width}px  sections=${v.sections.join(",")}  order=${orderOk ? "PASS" : "FAIL"}  ` +
        `scrollWidth=${v.scrollWidth}/${v.innerWidth}  hscroll=${noHScroll ? "PASS" : "FAIL"}  ${shotPath}`,
    );
    if (!orderOk || !noHScroll) failed = true;
  }
  c.close();
} catch (err) {
  console.error(`drive failed: ${err.message}`);
  failed = true;
} finally {
  const exited = new Promise((r) => chrome.once("exit", r));
  chrome.kill();
  await exited;
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {}
}

writeFileSync(join(outDir, "report.json"), JSON.stringify(report, null, 2));
console.log(failed ? "VERIFY-APP: FAIL" : "VERIFY-APP: PASS");
process.exit(failed ? 1 : 0);
