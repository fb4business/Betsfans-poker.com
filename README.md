# Betsfans-poker.com

Landing page for **BetsFans Poker** — one static, SEO-focused, scroll-driven page that sends visitors to the game at [betsfans-poker.app](https://www.betsfans-poker.app).

No build step and no dependencies: `index.html`, `assets/css/main.css`, `assets/js/main.js`, images in `assets/img/`.

```bash
python3 -m http.server 8765   # then open http://localhost:8765
```

## What's on the page
- **Hero**: a parallax galaxy, a starfield that speeds up as you scroll, the bot crew, and a spaceship that flies across the screen as you scroll.
- **The Final Frontier**: a pinned galaxy map. Scrolling flies the ship from Rustbelt Station to The Core while the camera follows it.
- **How to join**: four steps, with a pinned screenshot that changes as each step scrolls past (on phones each step shows its own screenshot).
- **Live tables** (horizontal scroll), **Private & VIP tables**, **Friends & AI bots** (every bot shown with its BOT badge), **Free chips**, **WhatsApp invite**, **Apps (coming soon)**, **FAQ**, and a final call to action.
- **Login / Register** open `betsfans-poker.app/login|register?redirect=/play`, so the player lands in the lobby after signing in. **Play now** opens `/play`. Every outbound link carries `utm_*` tags (`utm_content` = button + position).

## SEO
- Title, description, keywords, canonical, robots, Open Graph and Twitter tags, plus `og-image.jpg` (1200×630).
- JSON-LD: WebSite, Organization, WebPage, VideoGame/WebApplication, HowTo, FAQPage, ItemList.
- One `h1`, semantic sections, alt text on every image, `robots.txt`, `sitemap.xml` with image entries, `site.webmanifest`.

## Accessibility & motion
- Motion follows `prefers-reduced-motion`. All content is in the HTML, so the page is readable without JavaScript.
- Checked at 375×667, 390×844, 844×390 (landscape) and 1280×800: no horizontal scroll, and tap targets are at least 44px.

## Deploying
`vercel.json` sends the bare domain to `www`, maps `/play`, `/login` and `/register` to the game, and sets cache and security headers. Point `www.betsfans-poker.com` at the Vercel project.

## Keep it a social game
Chips are virtual, have no cash value and can't be withdrawn. The page must never use real-money, cash-out or prize language. Bots are always shown as BOT.
