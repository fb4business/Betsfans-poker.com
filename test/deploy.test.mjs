// Vercel publishes public/ (vercel.json `outputDirectory`), which the build fills
// from DEPLOY. Anything the pages link to must be on that list.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { DEPLOY, OUT_DIR, OUTPUTS, render } from "../build.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const vercel = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));

test("vercel.json builds into the folder the build writes", () => {
  assert.equal(vercel.outputDirectory, OUT_DIR);
  assert.equal(vercel.buildCommand, "npm run build");
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
  assert.match(pkg.scripts.build, /build\.mjs/);
});

test("every local file the pages, stylesheet and manifest reference is deployed", () => {
  const sources = [
    ...Object.keys(OUTPUTS).map((code) => render(code)),
    readFileSync(join(ROOT, "assets/css/main.css"), "utf8"),
    readFileSync(join(ROOT, "site.webmanifest"), "utf8"),
  ].join("\n");
  const refs = new Set([...sources.matchAll(/(?:\b(?:href|src|srcset|imagesrcset|content)=["']|url\(["']?|, )(\/[^"'()\s,?#]+\.[a-z0-9]+)/gi)].map((m) => m[1].slice(1)));
  for (const m of sources.matchAll(/"src":\s*"\/([^"?]+)/g)) refs.add(m[1]);
  // Absolute links to this site (share images, sitemap entries, structured data).
  for (const m of sources.matchAll(/https:\/\/www\.betsfans-poker\.com\/([^"'\s?#<]+\.[a-z0-9]+)/gi)) refs.add(m[1]);
  assert.ok(refs.size > 20, `only found ${refs.size} references`);
  for (const ref of refs) {
    assert.ok(existsSync(join(ROOT, ref)), `${ref} is referenced but missing`);
    assert.ok(DEPLOY.some((entry) => ref === entry || ref.startsWith(entry + "/")), `${ref} is not copied to ${OUT_DIR}/`);
  }
});

test("source files are not deployed", () => {
  for (const entry of DEPLOY) assert.doesNotMatch(entry, /^(src|test|build\.mjs|package\.json|README)/);
});
