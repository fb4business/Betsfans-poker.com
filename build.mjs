// Renders the landing page in every language:
//   src/page.html + src/i18n.mjs  →  index.html (en), he/index.html, fr/index.html, sitemap.xml
// No dependencies. Run `npm run build` after editing the template or strings;
// `npm test` fails if the committed pages are out of date.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { LANGS, strings } from "./src/i18n.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.betsfans-poker.com";
const APP = "https://www.betsfans-poker.app";
const CODES = Object.keys(LANGS);
const LASTMOD = "2026-10-19";

export const OUTPUTS = { en: "index.html", he: "he/index.html", fr: "fr/index.html" };

const urlFor = (code) => SITE + LANGS[code].path;
const esc = (s) => s.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, "&amp;").replace(/"/g, "&quot;");
const plain = (s) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

/** A link into the game that keeps the reader's language and lands on /play after sign-in. */
export function appUrl(path, code) {
  const url = new URL(APP + path);
  if (path === "/login" || path === "/register") url.searchParams.set("redirect", "/play");
  url.searchParams.set("lang", code);
  return url.toString();
}

/** French typography: no line break inside "10 000" or before ? ! : ; */
const frenchSpaces = (s) => s.replace(/(\d) (?=\d{3}\b)/g, "$1\u202f").replace(/ ([?!:;])(?=\s|$|<)/g, "\u00a0$1");

function t(key, code) {
  const entry = strings[key];
  if (!entry) throw new Error(`Unknown string key: ${key}`);
  const value = entry[CODES.indexOf(code)];
  return code === "fr" ? frenchSpaces(value) : value;
}

const eyeIcon = '<svg class="ic inline" aria-hidden="true"><use href="#i-eye" /></svg>';
const STATIONS = [1, 2, 3, 4, 5];
const XP = [0, 100, 300, 700, 1400];

function jsonLd(code) {
  const T = (k) => plain(t(k, code));
  const url = urlFor(code);
  const faq = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
    "@type": "Question",
    name: T(`faq${i}q`),
    acceptedAnswer: { "@type": "Answer", text: T(`faq${i}a`) },
  }));
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: "BetsFans Poker", inLanguage: CODES, publisher: { "@id": `${SITE}/#organization` } },
      { "@type": "Organization", "@id": `${SITE}/#organization`, name: "BetsFans Poker", legalName: "BLOSSOM365 LP", url: `${SITE}/`, logo: `${SITE}/icon-512.png`, email: "support@betsfans-poker.app", sameAs: [`${APP}/`] },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: T("metaTitle"), description: T("metaDescription"), inLanguage: code, isPartOf: { "@id": `${SITE}/#website` }, about: { "@id": `${SITE}/#game` }, primaryImageOfPage: `${SITE}/${ogImage(code)}` },
      {
        "@type": ["VideoGame", "WebApplication"],
        "@id": `${SITE}/#game`,
        name: "BetsFans Poker",
        url: `${APP}/`,
        description: T("ogDescription"),
        genre: ["Poker", "Card game"],
        gamePlatform: ["Web browser", "Mobile web"],
        playMode: ["MultiPlayer", "SinglePlayer"],
        applicationCategory: "GameApplication",
        operatingSystem: "Any",
        inLanguage: CODES,
        isAccessibleForFree: true,
        typicalAgeRange: "18-",
        image: `${SITE}/${ogImage(code)}`,
        screenshot: ["table-mainz", "lobby", "vip-tables", "frontier"].map((s) => `${SITE}/assets/img/shots/${s}.webp`),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "HowTo",
        "@id": `${url}#how-to-join`,
        name: T("howToName"),
        inLanguage: code,
        totalTime: "PT1M",
        step: [1, 2, 3, 4].map((i) => ({ "@type": "HowToStep", position: i, name: T(`hs${i}n`), text: T(`hs${i}t`), url: `${url}#join` })),
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: code, mainEntity: faq },
      {
        "@type": "ItemList",
        name: T("srTitle"),
        itemListElement: STATIONS.map((i) => ({ "@type": "ListItem", position: i, name: `${T(`st${i}`)} — ${T(`sal${i}`)}` })),
      },
    ],
  };
  return JSON.stringify(graph, null, 2).replace(/<\//g, "<\\/").replace(/^/gm, "  ");
}

const ogImage = (code) => (code === "en" ? "og-image.jpg" : `og-image-${code}.jpg`);

function fontsHref(code) {
  const families = ["Inter+Tight:wght@600;700;800", "Inter:wght@400;500;600;700"];
  if (code === "he") families.push("Heebo:wght@400;500;700;800");
  return `https://fonts.googleapis.com/css2?${families.map((f) => `family=${f}`).join("&")}&display=swap`;
}

function langSwitch(code) {
  const items = CODES.map((c) => {
    const cur = c === code ? ' aria-current="page"' : "";
    return `            <li><a href="${LANGS[c].path}" hreflang="${c}" lang="${c}" data-lang="${c}"${cur}>${LANGS[c].label}</a></li>`;
  }).join("\n");
  return [
    `        <details class="lang" data-lang-menu>`,
    `          <summary aria-label="${esc(t("langAria", code))}"><svg class="ic" aria-hidden="true"><use href="#i-globe" /></svg><span>${LANGS[code].short}</span></summary>`,
    `          <ul>`,
    items,
    `          </ul>`,
    `        </details>`,
  ].join("\n");
}

function langFooter(code) {
  const links = CODES.map((c) => `<a href="${LANGS[c].path}" hreflang="${c}" lang="${c}" data-lang="${c}"${c === code ? ' aria-current="page"' : ""}>${LANGS[c].label}</a>`).join(" · ");
  return `      <nav class="lang-footer" aria-label="${esc(t("langAria", code))}">${links}</nav>`;
}

function srList(code) {
  return STATIONS.map((i) => {
    const unlock = i === 1 ? t("unlocked", code) : t("xpToUnlock", code).replace("{n}", XP[i - 1].toLocaleString(code === "fr" ? "fr-FR" : "en-US"));
    return `          <li>${t(`st${i}`, code)} — ${t(`sal${i}`, code)}. ${t(`desc${i}`, code)} ${unlock}.</li>`;
  }).join("\n");
}

function runtimeStrings(code) {
  const data = {
    lang: code,
    copied: t("jsCopied", code),
    copyPrompt: t("jsCopyPrompt", code),
    waText: t("waText", code),
    invite: urlFor(code),
    stations: STATIONS.map((i) => ({ name: t(`st${i}`, code), saloon: t(`sal${i}`, code), kicker: t(`kicker${i}`, code), desc: t(`desc${i}`, code) })),
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function render(code) {
  const L = LANGS[code];
  let html = readFileSync(join(ROOT, "src/page.html"), "utf8");
  html = html.replace("{{> svgdefs}}", readFileSync(join(ROOT, "src/_svgdefs.html"), "utf8").trimEnd());

  const inviteUrl = `${urlFor(code)}?utm_source=whatsapp&utm_medium=share&utm_campaign=invite`;
  const special = {
    lang: code,
    dir: L.dir,
    home: L.path,
    canonical: urlFor(code),
    hreflang: [...CODES.map((c) => `  <link rel="alternate" hreflang="${c}" href="${urlFor(c)}" />`), `  <link rel="alternate" hreflang="x-default" href="${urlFor("en")}" />`].join("\n"),
    ogLocale: L.locale,
    ogLocaleAlt: CODES.filter((c) => c !== code).map((c) => `  <meta property="og:locale:alternate" content="${LANGS[c].locale}" />`).join("\n"),
    ogImage: ogImage(code),
    fontsHref: fontsHref(code),
    jsonld: jsonLd(code),
    i18nJson: runtimeStrings(code),
    waHref: esc("https://wa.me/?text=" + encodeURIComponent(`${t("waText", code)} ${inviteUrl}`)),
    langSwitch: langSwitch(code),
    langFooter: langFooter(code),
    srList: srList(code),
    vipMailSubjectUrl: encodeURIComponent(t("vipMailSubject", code)),
    j3p: t("j3p", code).replace("{eye}", eyeIcon),
    chTitle: t("chTitle", code).replace("{count}", `<span class="count" data-count="10000">${t("ch1b", code)}</span>`),
  };

  html = html.replace(/\{\{app:([^}]+)\}\}/g, (_, path) => esc(appUrl(path, code)));
  html = html.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (key in special) return special[key];
    const value = t(key, code);
    if (value.includes('"') && !value.includes("<")) throw new Error(`Unescaped quote in ${key} (${code})`);
    return value;
  });
  if (/\{\{/.test(html)) throw new Error(`Unrendered placeholder in ${code}: ${html.match(/\{\{[^}]*\}\}/)[0]}`);
  return html;
}

export function sitemap() {
  const alternates = [...CODES.map((c) => `    <xhtml:link rel="alternate" hreflang="${c}" href="${urlFor(c)}" />`), `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en")}" />`].join("\n");
  const images = ["shots/table-mainz.webp", "shots/vip-tables.webp", "shots/frontier.webp", "bot-crew.webp"];
  const urls = CODES.map((c) => [
    "  <url>",
    `    <loc>${urlFor(c)}</loc>`,
    alternates,
    `    <lastmod>${LASTMOD}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${c === "en" ? "1.0" : "0.9"}</priority>`,
    `    <image:image><image:loc>${SITE}/${ogImage(c)}</image:loc></image:image>`,
    ...images.map((i) => `    <image:image><image:loc>${SITE}/assets/img/${i}</image:loc></image:image>`),
    "  </url>",
  ].join("\n"));
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  for (const code of CODES) {
    const out = join(ROOT, OUTPUTS[code]);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, render(code));
    console.log("wrote", OUTPUTS[code]);
  }
  writeFileSync(join(ROOT, "sitemap.xml"), sitemap());
  console.log("wrote sitemap.xml");
}
