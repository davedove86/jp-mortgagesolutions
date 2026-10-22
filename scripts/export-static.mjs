#!/usr/bin/env node
/**
 * Static export for plain hosting (Eco Web Hosting / LiteSpeed public_html).
 *
 * Usage:  npx vite build && node scripts/export-static.mjs
 *
 * Starts `vite preview` on the built app, renders every route with the live
 * host (so canonical / og:image point at https://jp-mortgagesolutions.co.uk),
 * adds og:url, writes one .html file per route plus 404.html, copies the
 * public assets and a static web manifest, and adds static-host/.htaccess.
 * Output: dist-static/  (zip its CONTENTS into public_html).
 */
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://jp-mortgagesolutions.co.uk";
const HOST = "jp-mortgagesolutions.co.uk";
const PORT = Number(process.env.EXPORT_PORT || 4179);
const OUT = join(process.cwd(), "dist-static");
const STATIC = join(process.cwd(), ".vercel/output/static");
const ROUTES = [
  "/", "/about-us", "/first-time-buyers", "/remortgages", "/buy-to-let-mortgages",
  "/new-build-mortgages", "/protection", "/faqs", "/contact", "/privacy-policy", "/cookie-policy",
];

if (!existsSync(STATIC)) throw new Error("Run `npx vite build` first (.vercel/output/static missing)");

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--host", "127.0.0.1", "--strictPort"], {
  stdio: ["ignore", "ignore", "ignore"],
  detached: true,
});
const base = `http://127.0.0.1:${PORT}`;
const headers = { "x-forwarded-host": HOST, "x-forwarded-proto": "https" };

async function waitUp() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(base + "/robots.txt"); if (r.ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("preview server did not start");
}

function addOgUrl(html, path) {
  const url = SITE + (path === "/" ? "" : path);
  const tag = `<meta property="og:url" content="${path === "/" ? SITE + "/" : url}">`;
  if (/property="og:url"/.test(html)) return html;
  return html.replace(/<meta property="og:title"/, `${tag}<meta property="og:title"`);
}

function check(html, path) {
  const bad = [/127\.0\.0\.1/, /localhost:/, /vercel\.app/, /_vercel\//, /extensions\.js/, /Created with Grok/];
  for (const re of bad) if (re.test(html)) throw new Error(`${path}: unexpected ${re}`);
  if (!html.includes(`<link rel="canonical" href="${SITE}`)) throw new Error(`${path}: canonical missing`);
}

try {
  await waitUp();
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });
  cpSync(STATIC, OUT, { recursive: true });
  rmSync(join(OUT, "__grok/install"), { recursive: true, force: true }); // Grok install page assets, not used

  for (const path of ROUTES) {
    const res = await fetch(base + path, { headers, redirect: "manual" });
    if (res.status !== 200) throw new Error(`${path}: HTTP ${res.status}`);
    let html = addOgUrl(await res.text(), path);
    check(html, path);
    const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
    writeFileSync(join(OUT, file), html);
    console.log(`page  ${path.padEnd(24)} -> ${file}`);
  }

  const nf = await fetch(base + "/__static-export-not-found__", { headers });
  if (nf.status !== 404) throw new Error(`404 page: HTTP ${nf.status}`);
  let nfHtml = await nf.text();
  nfHtml = nfHtml.replace(/<link rel="canonical"[^>]*>/g, "").replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex"/>');
  if (!/name="robots"/.test(nfHtml)) nfHtml = nfHtml.replace("</head>", '<meta name="robots" content="noindex"/></head>');
  writeFileSync(join(OUT, "404.html"), nfHtml);
  console.log("page  (not found)               -> 404.html");

  const mf = await fetch(base + "/__grok/manifest.webmanifest", { headers });
  if (!mf.ok) throw new Error("manifest fetch failed");
  writeFileSync(join(OUT, "__grok/manifest.webmanifest"), await mf.text());
  console.log("file  /__grok/manifest.webmanifest");

  cpSync(join(process.cwd(), "static-host/.htaccess"), join(OUT, ".htaccess"));
  console.log("file  .htaccess");
} finally {
  try { process.kill(-server.pid, "SIGTERM"); } catch { server.kill("SIGTERM"); }
}
