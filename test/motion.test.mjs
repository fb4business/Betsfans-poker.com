// Guards for the three ways the page must still work: with JavaScript and motion
// (the pinned scenes), with reduced motion, and with no JavaScript at all.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(ROOT, "assets/css/main.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const js = readFileSync(join(ROOT, "assets/js/main.js"), "utf8");
const page = readFileSync(join(ROOT, "src/page.html"), "utf8");
// Innermost rule blocks: [selector, body]. @media wrappers fall away because a selector can't contain a brace.
const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => [m[1].trim(), m[2]]);
const selectorsWith = (re) => rules.filter(([, body]) => re.test(body)).map(([sel]) => sel);

test("<head> turns motion on only for readers who have not asked for reduced motion", () => {
  assert.match(page, /if \(!matchMedia\("\(prefers-reduced-motion: reduce\)"\)\.matches\) c\.add\("motion"\)/);
});

test("the tall pinned sections exist only under .motion", () => {
  const tall = selectorsWith(/height:\s*(520|340)s?vh/);
  assert.ok(tall.length >= 2, "pinned heights not found");
  for (const sel of tall) assert.match(sel, /^\.motion /, `${sel} pins without .motion`);
  const sticky = selectorsWith(/position:\s*sticky/).filter((s) => /voyage|gallery/.test(s));
  for (const sel of sticky) assert.match(sel, /^\.motion /, `${sel} is sticky without .motion`);
});

test("by default the gallery scrolls sideways and the voyage map is laid out in the flow", () => {
  const body = (sel) => rules.find(([s]) => s === sel)?.[1] ?? "";
  assert.match(body(".gallery-track"), /overflow-x:\s*auto/);
  assert.match(body(".voyage-stage"), /position:\s*relative/);
  assert.match(body(".voyage-stage"), /aspect-ratio/);
});

test("carousels animate only once main.js has doubled them (.looping)", () => {
  const animated = selectorsWith(/animation:\s*marquee/);
  assert.ok(animated.length === 2, `expected 2 looping rows, got ${animated}`);
  for (const sel of animated) assert.match(sel, /\.looping$/, `${sel} animates before it is doubled`);
  // A trailing margin instead of `gap`, so the doubled row splits into two equal halves.
  for (const sel of animated) assert.match(rules.find(([s]) => s === sel)[1], /gap:\s*0/);
  assert.match(js, /if \(!reduced\) \{\s*\$\$\("\[data-marquee\]"\)/);
  assert.match(js, /cloneNode\(true\)/);
  assert.match(js, /classList\.add\("looping"\)/);
});

test("reduced motion gets the static voyage, never the scroll-driven camera", () => {
  assert.match(js, /if \(voyage && !reduced\) renderVoyage\(/);
  assert.match(js, /if \(voyage && reduced\) renderVoyageStatic\(\)/);
  assert.match(js, /if \(!reduced\) layoutVoyage\(\)/);
  assert.doesNotMatch(js.slice(js.indexOf("const renderVoyageStatic"), js.indexOf("/* ---------- One scroll loop")), /stage\.style/);
});
