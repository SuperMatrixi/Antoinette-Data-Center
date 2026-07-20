# Copilot Instructions — Antoinette Data Center

## Project Overview

**Antoinette Data Center (ADC)** is a bilingual (FR/EN) single-page website for an AI & Web3 tech hub, incubator, and ethical-AI think-tank based in Paris, Bobigny-Cœur-de-Ville (93000). It is a static site deployed to GitHub Pages.

- Founded: 15 November 2025 by Hermann Djoumessi & Kristen Girard
- Address: 26 Rue du Chemin Vert, Paris, Bobigny-Cœur-de-Ville 93000
- Canonical URL: https://www.antoinettedatacenter.com/

---

## Repository Layout

| Path | Purpose |
|------|---------|
| `index.html` | Complete single-page site (~76 KB) — the only HTML file |
| `css/style.css` | Standalone stylesheet (do not inline; referenced via `<link>`) |
| `js/main.js` | Site JS: ticker, carousel, FAQ, GDPR, lang switch, scroll reveal |
| `js/chatbot.js` | TYNA chatbot — 40 bilingual FAQ entries, keyword matching |
| `assets/images/` | All images (PNG, JPG, GIF) used by `index.html` |
| `assets/logos/` | Brand and partner logos |
| `assets/icons/` | UI icons |
| `assets/videos/` | Video files |
| `docs/content.md` | **Single source of truth** for all copy, prices, contacts, partners |
| `docs/mindmap.md` | Architecture notes, section order, image filename list |
| `scripts/build.py` | Python helper — regenerates `index.html` (uses `/mnt/user-data/` paths, not for CI) |
| `scripts/generate.py` | Same as above (duplicate scaffold) |
| `.github/workflows/deploy.yml` | GitHub Pages deployment on push to `main` |

---

## The Golden Rule: Content Lives in `docs/content.md`

**Always read `docs/content.md` before editing any text, price, name, link, or metric in `index.html`, `js/chatbot.js`, or any other file.**

`docs/content.md` is the single source of truth for:
- FR and EN hero/section copy
- Program details, prices, and coach names
- Contact details (phone, WhatsApp, email, address, coordinates)
- Partner names and URLs
- Key metrics (50+ practitioners, 12 startups, 150k€, etc.)

Never invent or paraphrase content — copy it verbatim from `docs/content.md`.

---

## Bilingual Architecture

The site is bilingual French/English. The language toggle calls `switchLang(l)` in `js/main.js`, which:
1. Toggles `class="act"` on the `.lbtn` buttons in the topbar.
2. Sets `document.documentElement.lang`.

Bilingual text in `index.html` is handled by **two sibling elements** with `data-fr`/`data-en` attributes OR by duplicate `<span lang="fr">` / `<span lang="en">` blocks — inspect the surrounding HTML to match the existing pattern.

In `js/chatbot.js`, every FAQ entry has both `fr:` and `en:` properties. Always provide both when adding or editing chatbot responses.

---

## CSS Design System (`css/style.css`)

Key CSS custom properties (defined in `:root`):

| Variable | Value | Use |
|----------|-------|-----|
| `--g` | `#1a8f50` | Tech green (primary) |
| `--gd` | `#0d6b3a` | Dark green (hover) |
| `--gl` | `#22b064` | Light green |
| `--gold` | `#D9A441` | Gold accent |
| `--navy` | `#0a1628` | Dark navy background |
| `--off` | `#F4F8F5` | Off-white section background |
| `--r` | `14px` | Default border-radius |
| `--rl` | `22px` | Large border-radius |
| `--tr` | `all .3s cubic-bezier(.4,0,.2,1)` | Standard transition |

**Utility classes:**
- `.wrap` — 1200px max-width centered container
- `.btn .btn-gold` — gold CTA button
- `.btn .btn-green` — green button
- `.btn .btn-ow` — outlined white button
- `.btn .btn-og` — outlined green button
- `.lbl` — uppercase gold label with decorative line
- `.reveal` / `.rl` / `.rr` — scroll-reveal animations (triggered by `IntersectionObserver` in `main.js`)

**Typography:** Headings use `Syne` (700/800), body uses `Outfit` (400–800). Both loaded from Google Fonts.

**Breakpoints:** `900px` (tablet) and `600px` (mobile).

---

## JavaScript Architecture (`js/main.js`)

All functions are global (no module system). Key functions:

| Function | Purpose |
|----------|---------|
| `initTicker()` | Populates the topbar crypto/AI price ticker; fetches live data from CoinGecko |
| `toggleMenu()` / `closeMenu()` | Mobile hamburger menu |
| `initCarousel()` | Image carousel with dots, prev/next, auto-advance |
| `playVideo(id)` | Loads YouTube embed in `#ytframe` |
| `toggleBlog()` | Expand/collapse blog section |
| `toggleFaq(btn)` | Accordion FAQ open/close |
| `initReveal()` | IntersectionObserver for `.reveal`, `.rl`, `.rr` |
| `initActiveNav()` | Highlights active nav pill based on scroll position |
| `submitContact(e)` | Handles contact form submission (visual only, no backend) |
| `initGDPR()` | Shows GDPR cookie banner after 1.8s if not already accepted |
| `openNewsletter()` / `closeNewsletter()` / `submitNl(e)` | Newsletter modal |
| `openChatbot()` | Opens TYNA chatbot bubble |
| `switchLang(l)` | Toggles FR/EN language display |

`DOMContentLoaded` runs: `initTicker`, `initCarousel`, `initReveal`, `initActiveNav`, `initGDPR`.

---

## TYNA Chatbot (`js/chatbot.js`)

TYNA is the built-in chatbot. It uses keyword matching (no external AI API):
- `TYNA.faq` — array of 40 `{k: [...keywords], fr: "...", en: "..."}` objects
- `TYNA.bad` — blocklist of forbidden topics
- `TYNA.sugg` — suggested quick-reply buttons (FR and EN)

To add a chatbot FAQ entry, push a new object into `TYNA.faq` with `k` (keyword array), `fr` (French answer), and `en` (English answer). Use content from `docs/content.md`.

---

## HTML Section Structure (scroll order)

0. `#topbar` — LIVE badge + crypto ticker + FR/EN toggle + social icons
1. `#nav` — Logo + nav pills + TYNA button + hamburger
2. `#hero` — Full-screen gradient, hero image, h1, pills, CTAs, key stats
3. `#vision` — Story GIF + narrative text + 6 metric cards
4. `#programs` — Guanxi Accéléré card + SEO→AEO webinar + Ellen Kountz
5. `#spaces` — 3 room cards + Peerspace CTA + 16-image carousel
6. `#video` — YouTube main player + 3 thumbnails
7. `#media` — Hermann interview + book highlight
8. `#blog` — Guanxi article with expand/collapse
9. `#faq` — 8 accordion items (also in Schema.org FAQPage)
10. `#contact` — Contact details + Google Maps embed + email form
11. `#join` — WhatsApp CTA + social links
12. `#partners` — 7 partner logos + Hello Mamiz support
13. `#footer` — Links + disclaimer + GDPR
14. Floating elements — WhatsApp bubble, newsletter bubble, TYNA chatbot

---

## SEO / Structured Data

`index.html` includes in `<head>`:
- `<script type="application/ld+json">` with `LocalBusiness + EducationalOrganization` and `FAQPage` schemas
- Open Graph and Twitter Card meta tags
- `hreflang` alternate links for FR and EN
- Geo meta tags (coordinates: `48.9047677, 2.4486043`)

When adding new FAQ items to the HTML accordion, also add matching `Question`/`Answer` entries to the JSON-LD `FAQPage` schema in `<head>`.

---

## Validation (No Build Step)

There is no build pipeline, bundler, or test runner. The site is served as-is.

**To validate Python scripts:**
```bash
python -m py_compile scripts/build.py scripts/generate.py
```

**To validate HTML/CSS/JS changes:** Open `index.html` in a browser or use a local HTTP server:
```bash
python -m http.server 8080
```

**Deployment:** Any push to `main` triggers `.github/workflows/deploy.yml`, which uploads the repo root to GitHub Pages via `actions/upload-pages-artifact` and `actions/deploy-pages`.

---

## Asset Conventions

- Image files: placed in `assets/images/` and referenced as `assets/images/FILENAME.ext` in `index.html`
- Logo files: placed in `assets/logos/`
- Use `loading="lazy" decoding="async"` on all `<img>` tags except above-the-fold ones (use `fetchpriority="high"` for those)
- Always include meaningful `alt` text

---

## Common Tasks and Patterns

**Update a price or metric:** Edit `docs/content.md` first, then find and update the matching text in `index.html` and in `js/chatbot.js` (the FAQ entry with the relevant keyword).

**Add a new program card:** Follow the structure of existing program cards in `#programs`. Add both FR and EN copy. Mirror the content in a new chatbot FAQ entry in `js/chatbot.js`.

**Add a partner logo:** Put the image in `assets/logos/`, add an `<img>` + `<a>` in the `#partners` section of `index.html`, and add the partner to `docs/content.md`.

**Edit contact info:** Change in `docs/content.md`, then update all occurrences in `index.html` (topbar ticker, `#contact` section, footer, WhatsApp links) and in `js/chatbot.js` (the `contact` and `whatsapp` FAQ entries).

---

## Known Limitations / Workarounds

- `scripts/build.py` and `scripts/generate.py` reference `/mnt/user-data/uploads/` paths that only exist in the original Jupyter/Colab environment. They are not runnable in CI. Use `python -m py_compile` only for syntax checking.
- The contact form (`submitContact`) has no backend — it shows a visual confirmation but does not send emails.
- `switchLang()` changes `lang` attribute and button state only — it does not swap visible text unless the HTML includes explicit bilingual markup for each element.
- The CoinGecko API call in `initTicker()` has a 4.5-second timeout and silently falls back to hardcoded values if it fails.
