# Betsfans-poker.com

Landing page for **BetsFans Poker** — one static, SEO-focused, scroll-driven page in **English, Hebrew (RTL) and French**, like [betsfans-poker.app](https://www.betsfans-poker.app), sending visitors to the game.

| URL | Language |
|---|---|
| `/` (`index.html`) | English |
| `/he` (`he/index.html`) | עברית — right-to-left |
| `/fr` (`fr/index.html`) | Français |

The three pages are generated from one template, and the generated HTML is committed, so hosting needs no build step:

- `src/page.html`: the page, with `{{key}}` placeholders
- `src/i18n.mjs`: every string as `[English, Hebrew, French]`, using the player app's own terms
- `build.mjs`: renders the pages, the per-language SEO tags and JSON-LD, and `sitemap.xml`

```bash
npm run build    # after editing src/page.html or src/i18n.mjs
npm test         # every string in all 3 languages, pages up to date, hreflang/SEO/links
npm run serve    # http://localhost:8765  (/he/ and /fr/ for the other languages)
```

**Language behaviour:**
- A first visit to `/` from a Hebrew or French browser goes to `/he` or `/fr`.
- Picking a language in the header or footer menu is remembered.
- Every link into the game carries `?lang=xx`, so the app opens in the same language (the app reads this parameter as of fb4business/Betsfans-poker#95).
- WhatsApp invites are written in the page's language and link back to it.

## What's on the page
- **Hero**: a parallax galaxy, a starfield that speeds up as you scroll, the bot crew, and a spaceship that flies across the screen as you scroll.
- **The Final Frontier**: a pinned galaxy map. Scrolling flies the ship from Rustbelt Station to The Core while the camera follows it.
- **How to join**: four steps, with a pinned screenshot that changes as each step scrolls past (on phones each step shows its own screenshot).
- **Live tables** (horizontal scroll), **Private & VIP tables**, **Friends & AI bots** (every bot shown with its BOT badge), **Free chips**, **WhatsApp invite**, **Apps (coming soon)**, **FAQ**, and a final call to action.
- **Login / Register** open `betsfans-poker.app/login|register?redirect=/play`, so the player lands in the lobby after signing in. **Play now** opens `/play`. Every outbound link carries `utm_*` tags (`utm_content` = button + position).

## SEO
- Per language: title, description, keywords, canonical, robots, Open Graph and Twitter tags, `hreflang` alternates (en/he/fr + x-default), and a share image (`og-image.jpg`, `og-image-he.jpg`, `og-image-fr.jpg`).
- JSON-LD: WebSite, Organization, WebPage, VideoGame/WebApplication, HowTo, FAQPage, ItemList.
- One `h1`, semantic sections, alt text on every image, `robots.txt`, a `sitemap.xml` with hreflang alternates and image entries, `site.webmanifest`.

## Accessibility & motion
- Motion follows `prefers-reduced-motion`. All content is in the HTML, so the page is readable without JavaScript.
- Checked in all three languages at 375×667, 390×844, 844×390 (landscape) and 1280×800: no horizontal scroll, and tap targets are at least 44px. Hebrew uses Heebo for its letters and mirrors the layout; the spaceship flies right to left.

## Deploying
`vercel.json` sends the bare domain to `www`, maps `/play`, `/login` and `/register` to the game, and sets cache and security headers. Point `www.betsfans-poker.com` at the Vercel project.

## Keep it a social game
Chips are virtual, have no cash value and can't be withdrawn. The page must never use real-money, cash-out or prize language. Bots are always shown as BOT.
