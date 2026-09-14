# apptek.io — marketing landing

A fast, single-page marketing landing for **APPTEK**: ops automation for small
and mid-sized teams. Built with Vite + React + TypeScript + Tailwind CSS. Static
output, no backend.

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

The copy is deliberate. A few locked decisions:

- **"Bot Ops" / "AI" naming.** We lead with the *outcome* ("Automation that
  actually runs the week") and the plain-English category **ops automation for
  small teams** — not "AI" and not "Grok Bot Ops". SMB buyers are AI-shy, so AI
  is kept below the fold: it appears only in the FAQ ("What's the technology
  behind it?") and the footer fine print, and only *after* trust is established.
  xAI's **Grok** is named there and nowhere prominent. If market feedback says
  buyers *want* the AI angle up top, that's a one-line change in `Hero.tsx`.
- **CTA language is "onboarding," not "setup."** Primary CTA is *Start
  onboarding*; the quote path is *Get a quote*. Keep this wording.
- **Pricing is soft.** The pilot is framed as "small, fixed-scope" with a
  "modest, predictable band" behind *Get a quote* — no dollar figure on-page.
  If you want to surface the ~$1–1.5k band, edit `Pilot.tsx` and `Faq.tsx`.
- **The offer spine** is one front door → a few specialists →
  draft-then-approve → spend governance → a runbook you own → hands-on
  onboarding. This runs through the hero card, "How it works," and "What's
  included." Keep these consistent if you rename anything.
- **Deliberately absent:** no Salesforce/MuleSoft comparisons, no
  enterprise/"AI theater" framing, no Virginia LLC or legal entity on-page.

### Likely tweaks after Grok Bot Galaxy / market feedback
- Headline A/B (`Hero.tsx`) if "runs the week" underperforms.
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
