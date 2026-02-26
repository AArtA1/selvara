# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# How to Operate

You're working inside the **WAT framework** (Workflows, Agents, Tools). This architecture separates concerns so that probabilistic AI handles reasoning while deterministic code handles execution.

**Layer 1: Workflows** — Markdown SOPs in `workflows/`. Each defines objective, inputs, tools, outputs, and edge cases.

**Layer 2: Agent (you)** — Read the relevant workflow, run tools in sequence, handle failures, ask when unclear. Don't try to do everything directly.

**Layer 3: Tools** — Python scripts in `tools/` for deterministic execution. API calls, data transforms, file ops. Credentials in `.env`.

**Why it matters:** At 90% accuracy per step, five
 steps = 59% success. Offloading execution to deterministic scripts keeps you focused on orchestration.

## Operating Rules

**1. Look for existing tools first.** Check `tools/` before building anything new.

**2. Learn and adapt when things fail.**
- Read the full error and trace
- Fix and retest (check with me before re-running if it uses paid API calls)
- Document what you learned in the workflow

**3. Keep workflows current.** Update when you find better methods or hit constraints. Don't create or overwrite workflows without asking unless I explicitly say to.

## The Self-Improvement Loop

1. Identify what broke → 2. Fix the tool → 3. Verify → 4. Update the workflow → 5. Move on

## File Structure

```
workflows/      # Markdown SOPs — what to do and how
tools/          # Python scripts — deterministic execution
.tmp/           # Temporary files, regenerated as needed
.env            # API keys (NEVER store secrets anywhere else)
credentials.json, token.json  # Google OAuth (gitignored)
```

Deliverables go to cloud services. `.tmp/` is disposable.

---

## Project Overview

E-commerce website for **SELVARA** — premium mattress brand. Built with Next.js App Router in `mattress-store/`.

## Development

```bash
cd mattress-store
npm run dev      # Start dev server (port 3000)
npm run build    # Production build (also runs TypeScript check)
npm run lint     # ESLint
```

No test framework is currently configured.

## Screenshot Workflow

Screenshots are a WAT tool — use them to verify visual changes after every front-end edit.

- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots saved to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

---

## Architecture

- **Framework**: Next.js 16 (App Router, TypeScript strict mode, React 19)
- **Styling**: CSS Modules (`.module.css` per component) + global CSS custom properties in `src/app/globals.css`
- **Fonts**: `next/font/google` — Source Serif 4 (headings) + Source Sans 3 (body), exposed as `--font-serif` / `--font-sans`
- **Images**: External via `saatva.imgix.net` CDN (configured in `next.config.ts`), using `next/image`
- **Imports**: Path alias `@/*` → `./src/*`

### Routes (`src/app/`)

| Route | Description |
|-------|-------------|
| `/` | Homepage: Hero, ValueProps, ProductGrid, WhySelvara, Reviews, CTA |
| `/mattresses` | Catalog with FilterBar |
| `/mattresses/[slug]` | PDP — uses `generateStaticParams()` for SSG |
| `/about` | Brand story, values grid |
| `/contact` | Contact info, help topics, FAQs |
| `/reviews` | Reviews with filters and summary |
| `/delivery-returns` | Delivery timeline, policies |

### Data Layer (`src/data/`)

- `products.ts` — Product array (catalog cards)
- `productDetails.ts` — Full product details keyed by slug (PDP pages)
- `types.ts` — TypeScript interfaces: `Product`, `ProductDetail`, `Review`, `SizePrice`, etc.
- `reviews.ts`, `helpTopics.ts`, `generalFaqs.ts` — Static content

### Component Pattern

Each component lives in `src/components/ComponentName/` with:
- `ComponentName.tsx` — functional component
- `ComponentName.module.css` — scoped styles

Global utility classes (`.section`, `.section-warm`, `.section-title`) are defined in `globals.css`.

### Key Design Patterns

- **Header** is `"use client"` — handles scroll-based transparency on homepage (transparent → solid on scroll), mobile burger menu
- **Hero** uses `::after` pseudo-element for bottom gradient fade into next section
- **FadeIn** wrapper component provides scroll-triggered entrance animations
- **ProductCard** uses full-image overlay style (image fills card, text over gradient)
- **WhySelvara** has two layouts: full-bleed duo cards (overlay style) + split image/text block

### CSS Custom Properties (key tokens)

Colors: `--color-brand-dark: #463f38`, `--color-gold: #d5aa63`, `--color-bg-warm: #f6f5f3`
Spacing: `--space-xs` (0.25rem) through `--space-4xl` (6rem)
Breakpoints: 1024px (tablet), 768px (mobile)

---

## Brand Guidelines — SELVARA

> Full brand strategy: `BRAND.md`

### Positioning

Premium Russian DTC mattress brand. Own production, natural materials, minimalist aesthetic.
Target: design-conscious buyers aged 25–45 in major Russian cities.
Archetype: **Creator** (primary) + **Sage** (voice).
Tagline: **"Только то, что важно."**

### Product Lineup

| Model | Construction | Firmness | Price (160×200) |
|---|---|---|---|
| **Linen** | Linen felt + coconut + springs | Firm | 55–65k ₽ |
| **Coconut** | Coconut + latex + springs | Medium | 55–65k ₽ |
| **Aero** | Perforated latex + springs | Soft | 55–65k ₽ |
| **Origin** | Latex + felt + springs 1024/m² | Medium | 65–80k ₽ |
| **Latex** | Springless, 10 layers latex + coconut | Medium/Firm | 70–85k ₽ |
| **Signature** | Coconut + latex + memory + springs 1024/m² | Soft/Medium | 85–105k ₽ |
| **Reserve** | Belgian latex + memory + springs 1024/m² | Soft | 105–130k ₽ |

No collections — flat hierarchy with three tiers (Linen/Coconut/Aero → Origin/Latex → Signature/Reserve).

### Tone

- Calm, confident, speaks as an equal
- Short sentences, generous whitespace
- Explains, does not pressure

**Forbidden without exception:**
- Exclamation marks
- ALL CAPS
- Words: скидка, акция, хит продаж, распродажа
- Fake crossed-out prices or countdown timers
- "Рекомендовано врачами", "Ортопедический эффект" as marketing claims

### Colors

- Primary: warm brown `#463f38`
- Accent: muted gold `#d5aa63` (use sparingly)
- Background: warm light beige `#f6f5f3`
- No bright or neon colors, ever

### Typography

- Headings — serif (Source Serif 4)
- Body — clean sans-serif (Source Sans 3)
- Generous line-height, airy spacing

### Photography & Visual Style

- Bedroom as a space of quiet and light — not a product on white background
- Natural morning light, warm muted tones, clean compositions
- No smiling people in pyjamas

### Mood

Silence. Light. Balance.
Confident quality without ostentatious luxury.

---

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand guidelines in the Brand Guidelines section above and in `BRAND.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

This verification ensures changes meet design standards and user requirements.

