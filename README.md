# apptek.io — marketing landing

A fast, single-page marketing landing for **APPTEK**: digital helpers for the busywork of small
and mid-sized teams. Built with Vite + React + TypeScript + Tailwind CSS. Static
output, no backend.

## Brand palette variants (A / B / C)

The layout, copy, and components are fixed — only the **color palette** is up
for comparison. Three cohesive 3-color systems ship together and are swappable
without duplicating the page. Colors resolve from CSS variables keyed on
`<html data-theme="…">` (see `src/index.css`) and are mapped to Tailwind classes
in `tailwind.config.js`, so switching a theme restyles the whole site.

**How to compare:**
- **In-page switcher** — subtle control fixed at the bottom-right (palette icon +
  A / B / C chips). Choice persists via `localStorage`.
- **Query param** — `?theme=a`, `?theme=b`, or `?theme=c` (e.g.
  `https://apptek.io/?theme=a`). Wins over the saved choice and applies before
  first paint (no flash).
- **Default is Variant C (warmed Azure)** — Bera's chosen direction. A and B are
  kept in the switcher for now so the warmed C can still be compared.

| Role | A — Evergreen | B — Turquoise | **C — Azure (warm, default)** |
| --- | --- | --- | --- |
| Paper (bg) | `#F7F4EC` | `#F1F6F6` | `#F7F3EA` |
| Paper soft | `#FCFAF4` | `#FAFDFD` | `#FCFAF3` |
| Paper deep | `#EFEADD` | `#E2EDED` | `#EEE6D6` |
| Ink (dark/text) | `#14231C` | `#0C1D22` | `#1B2A43` |
| Ink soft | `#26382F` | `#17323A` | `#2A3C59` |
| Ink muted | `#55655C` | `#52686E` | `#63697A` |
| **Primary 500** | `#2F6B44` | `#0C877D` | `#3064AC` |
| **Primary 600** | `#215433` | `#0A6C64` | `#26538F` |
| Primary 100 | `#D6E6D9` | `#C3E9E5` | `#D7E4F5` |
| Primary 200 | `#AECCB4` | `#92D7D0` | `#AFC8EA` |
| **Warm accent 400** | `#D07E4F` | `#E86F52` | `#E3A033` |
| Warm accent 300 | `#E0A17B` | `#F1977E` | `#EFBB5F` |
| Warm accent 600 | `#9A4B26` | `#AC3E22` | `#9C6410` |

Full 10-step primary and 6-step warm scales (used for chips, borders, glows,
etc.) live in `src/index.css` under each `[data-theme]` block.

- **C — Azure (warm) — DEFAULT:** warm cream/ivory paper (not clinical
  cool-white), softened royal-azure primary, warm navy ink, and a honey-gold
  accent. The primary **CTAs ("Talk about my week") use the gold accent** so the
  page feels welcoming to SMB humans, not cold enterprise blue — while the azure
  brand DNA carries the headline highlight, links, eyebrows, icons, and dark
  sections. The gold-CTA treatment is scoped to `[data-theme='c']` (see the
  override block in `src/index.css`), so A and B keep their original ink CTAs.
- **A — Evergreen:** warm cream paper, deep forest-green primary, terracotta/clay
  accent. The original earthy system.
- **B — Turquoise:** cool near-white paper, turquoise-teal primary, deep
  teal-slate ink, warm coral accent — fresh and modern, still premium.

**Locking C as the only theme later:** `<html>` already defaults to
`data-theme="c"`. Once Bera confirms, you can delete
`src/components/ui/ThemeSwitcher.tsx` plus its import in `App.tsx`, and drop the
`[data-theme='a']` / `[data-theme='b']` blocks in `src/index.css` (keep the
`[data-theme='c']` block and its CTA overrides).

## Logo & brand marks

APPTEK ships an SVG wordmark + icon mark (no AI-robot cliché, no generic SaaS
swoosh), tuned to the warmed Azure palette (soft royal-azure + honey-gold).
Four concepts are provided so the mark can still be swapped:

| # | Concept | Idea | Status |
| --- | --- | --- | --- |
| 1 | **Peak** | A steady ascent over a grounded amber line; also reads as an "A". | **default** |
| 2 | **Archway** | One front door with a warm amber threshold (the core positioning); crossbar doubles as an "A". | option |
| 3 | **Approve** | A check whose upstroke turns amber — the draft-then-approve "go". | option |
| 4 | **Cadence** | Five rising strokes — a week handled, ending on a calm amber high. | option |

- **Concept board:** open `public/brand/index.html` (served at `/brand/` in
  dev/preview) to compare all four with 32px/16px favicon previews and on-navy
  swatches.
- **Assets:** `public/brand/mark-[1-4]-*.svg` (icon) and
  `public/brand/lockup-[1-4]-*.svg` (horizontal lockup).
- **Wired default:** Concept 1 (Peak). The header/footer logo is rendered by
  `src/components/ui/Wordmark.tsx` using theme tokens (`moss` = primary,
  `clay` = warm accent), so the mark tracks whichever palette is active. The
  browser favicon is `public/favicon.svg` (matches the Peak mark).
- **To swap the default:** point `Wordmark.tsx` at another concept's paths and
  replace `public/favicon.svg` with the matching `mark-*.svg` (both use the same
  64×64 geometry as the files in `public/brand/`).

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

Node 18+ recommended.

## Deploying to apptek.io

This is a static site — the build produces a plain `dist/` folder you can host
anywhere. The repo is StackBlitz/Bolt-based (no host config committed), so pick
whichever of these fits your setup:

**Vercel (recommended, zero-config):**
Vercel auto-detects Vite. Import the GitHub repo, keep the defaults:
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
Then point the `apptek.io` domain at the project in Vercel → Settings → Domains.
Every push to the default branch redeploys. No `vercel.json` is needed because
this is a single page with no client-side routing.

**Netlify:** Build command `npm run build`, publish directory `dist`.

**Any static host / CDN (S3+CloudFront, Cloudflare Pages, GitHub Pages):**
Run `npm run build` and upload the contents of `dist/`.

### Before you point the domain
- Update the absolute URLs in `index.html` (`og:url`, `og:image`, `canonical`)
  if the production origin differs from `https://apptek.io/`.
- Add a real Open Graph image at `/og-image.png` (1200×630). The tags already
  reference it; the image file itself is intentionally not committed yet.
- Set the real intake path in `src/config.ts` (`CONTACT_EMAIL` and the two CTA
  hrefs). They currently deep-link to `mailto:hello@apptek.io`. Swap for a form
  or booking link when one exists.

## Positioning & copy notes (read before editing copy)

The copy is deliberate (current version: v3 "Fable polish" — full text in
`docs/copy-v3-fable.md`). A few locked decisions:

- **"Digital helpers," not "AI" / "bots."** We lead with the *outcome* ("Hand
  off the busywork. Keep the final word.") and the plain-English noun **digital
  helpers**. SMB buyers are AI-shy, so AI is kept below the fold: it appears
  only in the FAQ ("Am I giving up control to 'AI'?", "Is this AI?") and the
  footer fine print, and only *after* trust is established. xAI's **Grok** is
  named there and nowhere prominent.
- **Banned in headlines:** front door, specialists, runbook, ops automation,
  bot ops, AI. Use "one place for requests," "helpers," "playbook" instead.
- **Busywork is the whole week, not just email.** Wherever the grind is
  described, name the spread: replies, follow-ups, scheduling, reminders,
  invoice nudges, routine updates.
- **Control is a gain, not a concession.** Helpers do the typing and chasing so
  the owner has *more* say over what goes out and better attention for
  decisions. "You approve before anything sends" stays everywhere. Avoid the
  cliché "slip through the cracks."
- **CTA language.** Primary CTA is *Talk about my week*; the quote path is
  *Get a quote*. Both labels live in `src/config.ts` (`PRIMARY_CTA`,
  `SECONDARY_CTA`) — change them there, not in components.
- **Pricing is soft.** The pilot is framed as "small, fixed-scope" with a
  "small, predictable band" behind *Get a quote* — no dollar figure on-page.
  If you want to surface the ~$1–1.5k band, edit `Pilot.tsx` and `Faq.tsx`.
- **The offer spine** is one place for the week's requests → digital helpers
  (one job each) → approve before anything sends → clear, capped pricing → a
  written playbook you own → hands-on setup. This runs through the hero card,
  "How it works," and "What's included." Keep these consistent if you rename
  anything.
- **Deliberately absent:** no Salesforce/MuleSoft comparisons, no
  enterprise/"AI theater" framing, no Virginia LLC or legal entity on-page.

### Likely tweaks after Grok Bot Galaxy / market feedback
- Headline A/B (`Hero.tsx`) if "Hand off the busywork" underperforms.
- Whether to name Grok/AI higher up (`Hero.tsx`, `Faq.tsx`).
- Whether to show the concrete pilot price (`Pilot.tsx`, `Faq.tsx`).
- Add real social proof / a case study once the pilot completes.
- Add a real OG image and a proper contact form or booking link.

## Structure

```
index.html                     # SEO: title, meta description, OG/Twitter tags, fonts
src/App.tsx                    # section composition
src/config.ts                  # contact email + CTA hrefs + nav links (edit here)
src/components/layout/         # Header, Footer
src/components/sections/       # Hero, HowItWorks, Included, WhoFor, Pilot, Faq, CtaBand
src/components/ui/             # Wordmark, WeekCard (hero visual), Reveal (entrance anim)
tailwind.config.js             # design system: warm-paper + evergreen + clay palette, fonts
```
