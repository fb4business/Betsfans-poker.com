import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LANGS, strings } from "../src/i18n.mjs";
import { render, sitemap, appUrl, assetVersion, OUTPUTS } from "../build.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CODES = Object.keys(LANGS);
const read = (p) => readFileSync(join(ROOT, p), "utf8");

test("every string has English, Hebrew and French", () => {
  for (const [key, values] of Object.entries(strings)) {
    assert.equal(values.length, CODES.length, `${key} needs ${CODES.length} languages`);
    values.forEach((v, i) => assert.ok(typeof v === "string" && v.trim(), `${key} is empty in ${CODES[i]}`));
  }
});

test("translations keep the same placeholders and inline markup", () => {
  for (const [key, [en, ...rest]] of Object.entries(strings)) {
    const shape = (s) => [...s.matchAll(/\{\w+\}|<\/?(strong|em|span)\b/g)].map((m) => m[0]).sort().join();
    rest.forEach((v, i) => assert.equal(shape(v), shape(en), `${key} (${CODES[i + 1]}) differs from English`));
  }
});

test("the template uses only known keys and every key is used", () => {
  const tpl = read("src/page.html");
  const SPECIAL = new Set(["lang", "dir", "home", "canonical", "hreflang", "ogLocale", "ogLocaleAlt", "ogImage", "fontsHref", "jsonld", "i18nJson", "waHref", "langSwitch", "langFooter", "srList", "vipMailSubjectUrl", "j3p", "chTitle"]);
  const used = new Set([...tpl.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]));
  for (const key of used) assert.ok(SPECIAL.has(key) || key in strings, `unknown key {{${key}}}`);
  const build = read("build.mjs");
  for (const key of Object.keys(strings)) {
    const referenced = used.has(key) || build.includes(`"${key}"`) || /^(st|sal|desc|kicker|faq|hs|ch1b)\d?/.test(key) || ["j3p", "chTitle", "ch1b"].includes(key);
    assert.ok(referenced, `string ${key} is never used`);
  }
});

for (const code of CODES) {
  test(`${code}: committed page is up to date with the template`, () => {
    assert.equal(read(OUTPUTS[code]), render(code), `run \`npm run build\` (${OUTPUTS[code]} is stale)`);
  });

  test(`${code}: language, direction, canonical and hreflang`, () => {
    const html = render(code);
    assert.match(html, new RegExp(`<html lang="${code}" dir="${LANGS[code].dir}">`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://www.betsfans-poker.com${LANGS[code].path}" />`));
    for (const c of CODES) assert.match(html, new RegExp(`hreflang="${c}" href="https://www.betsfans-poker.com${LANGS[c].path}"`));
    assert.match(html, /hreflang="x-default" href="https:\/\/www.betsfans-poker.com\/"/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.doesNotMatch(html, /<img(?![^>]*\balt=)[^>]*>/, "every image has alt text");
  });

  test(`${code}: structured data parses and is in this language`, () => {
    const html = render(code);
    const blocks = [...html.matchAll(/<script type="application\/(?:ld\+)?json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    assert.equal(blocks.length, 2);
    const faq = blocks[0]["@graph"].find((n) => n["@type"] === "FAQPage");
    assert.equal(faq.mainEntity.length, 7);
    const norm = (v) => v.replace(/[\u00a0\u202f]/g, " ");
    assert.equal(norm(faq.mainEntity[0].name), strings.faq1q[CODES.indexOf(code)]);
    const runtime = blocks[1];
    assert.equal(runtime.lang, code);
    assert.equal(runtime.stations.length, 5);
  });

  test(`${code}: game links keep the language and send sign-ins to /play`, () => {
    const html = render(code);
    const hrefs = [...html.matchAll(/href="(https:\/\/www\.betsfans-poker\.app\/(?:play|login|register|frontier)[^"]*)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    assert.ok(hrefs.length >= 10);
    for (const h of hrefs) {
      const u = new URL(h);
      assert.equal(u.searchParams.get("lang"), code, h);
      if (/\/(login|register)$/.test(u.pathname)) assert.equal(u.searchParams.get("redirect"), "/play", h);
    }
  });

  test(`${code}: Google Play badges link to the live listing in this language`, () => {
    const html = render(code);
    const hrefs = [...html.matchAll(/href="(https:\/\/play\.google\.com\/[^"]+)"/g)].map((m) => new URL(m[1].replace(/&amp;/g, "&")));
    assert.equal(hrefs.length, 3);
    for (const u of hrefs) {
      assert.equal(u.searchParams.get("id"), "app.betsfanspoker.poker");
      assert.equal(u.searchParams.get("hl"), code === "he" ? "iw" : code);
      assert.match(u.searchParams.get("referrer"), /^utm_source=betsfans-poker\.com&.*utm_content=play-store-(hero|apps|footer)$/);
    }
    assert.doesNotMatch(html, /data-soon="[^"]*"[^>]*><svg[^>]*><use href="#i-play"/);
  });

  test(`${code}: WhatsApp invites point back to this language's page`, () => {
    const html = render(code);
    const wa = [...html.matchAll(/href="(https:\/\/wa\.me\/\?text=[^"]+)"/g)].map((m) => decodeURIComponent(new URL(m[1].replace(/&amp;/g, "&")).searchParams.get("text")));
    assert.equal(wa.length, 4);
    for (const text of wa) assert.ok(text.includes(`https://www.betsfans-poker.com${LANGS[code].path === "/" ? "/" : LANGS[code].path}?utm_source=whatsapp`), text);
  });

  test(`${code}: stays a social game (no real-money or prize promises)`, () => {
    const text = render(code).replace(/<[^>]+>/g, " ");
    // The only money words allowed are the disclaimers saying there is none.
    const en = /\b(win real money|cash out|cash prizes?|withdraw your winnings|deposit)\b/i;
    assert.doesNotMatch(text, en);
  });
}

test("stylesheet and script links change whenever the files change", () => {
  const html = render("en");
  for (const path of ["/assets/css/main.css", "/assets/js/main.js"]) {
    const v = html.match(new RegExp(`"${path.replace(/[./]/g, "\\$&")}\\?v=([0-9a-f]{10})"`));
    assert.ok(v, `${path} is not versioned`);
    assert.equal(v[1], assetVersion(path));
  }
});

test("appUrl adds redirect only for sign-in pages", () => {
  assert.equal(appUrl("/play", "he"), "https://www.betsfans-poker.app/play?lang=he");
  assert.equal(appUrl("/login", "fr"), "https://www.betsfans-poker.app/login?redirect=%2Fplay&lang=fr");
});

test("sitemap lists every language with alternates", () => {
  assert.equal(read("sitemap.xml"), sitemap());
  const xml = sitemap();
  for (const c of CODES) assert.ok(xml.includes(`<loc>https://www.betsfans-poker.com${LANGS[c].path}</loc>`));
  assert.equal((xml.match(/<url>/g) || []).length, CODES.length);
});
