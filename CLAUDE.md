# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

E-commerce website for **SELVARA** — premium mattress brand. Built with Next.js App Router in `mattress-store/` and Medusa.js backend in `selvara-backend/`.

## Development

Both services must be running simultaneously:

```bash
# Terminal 1 — Medusa backend (port 9000)
cd selvara-backend && npm run dev

# Terminal 2 — Next.js frontend (port 3000)
cd mattress-store && npm run dev

npm run build    # Production build (also runs TypeScript check)
npm run lint     # ESLint
```

No test framework is currently configured.

### Local services

| Service | Port | Notes |
|---------|------|-------|
| Next.js frontend | 3000 | |
| Medusa backend | 9000 | `selvara-backend/` |
| PostgreSQL | 5432 | database: `selvara_dev` |
| Redis | 6379 | event bus, required by Medusa |

Start/check services:
```bash
brew services list                              # check postgres + redis status
/opt/homebrew/opt/postgresql@16/bin/psql selvara_dev   # connect to DB
```

Medusa admin panel: `http://localhost:9000/app`
Admin credentials: `admin@selvara.ru` / `selvara2024`

---

## Reference Site Inspection (mandatory)

When the user shares a URL as a design reference, **always** open it with `mcp__playwright__browser_navigate`, take a full-page screenshot with `mcp__playwright__browser_take_screenshot` (`fullPage: true`) saving to the `screenshots/` directory, and read the screenshot to understand how the page actually looks. Do not rely solely on HTML/text fetched via `WebFetch` — visual context (layout, spacing, typography, colors, imagery) is critical for accurate design work.

---

## Visual Development

### Design Principles
- Brand guidelines in the Brand Guidelines section below and in `BRAND.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Frontend Design Skill (mandatory)

Whenever the user requests a design change, redesign, or new UI work, **always** invoke the `frontend-design` skill before implementing. This ensures distinctive, high-quality aesthetics that avoid generic AI patterns. Pass the task context (component name, brand mood, reference sites) as arguments to the skill.

### Quick Visual Check (mandatory after every front-end change)

IMMEDIATELY after implementing any front-end change:

1. **Identify what changed** — review the modified components/pages
2. **Navigate to affected pages** — `mcp__playwright__browser_navigate` → `http://localhost:3000/<path>`, viewport 1440×900
3. **Take a full-page screenshot** — save to `screenshots/` with a descriptive name
4. **Verify visually** — compare against brand guidelines, reference, and the user's request. Be precise: exact hex colors, pixel spacing, font sizes
5. **Check console errors** — `mcp__playwright__browser_console_messages` level `error`. Fix any before continuing
6. **Fix and repeat** — if anything is off, fix and go back to step 2
7. **Mobile check** — resize to 375×812, screenshot, verify responsive layout

| Action | Tool |
|--------|------|
| Open page | `mcp__playwright__browser_navigate` |
| Resize viewport | `mcp__playwright__browser_resize` |
| Full-page screenshot | `mcp__playwright__browser_take_screenshot` (`fullPage: true`) |
| Console errors | `mcp__playwright__browser_console_messages` |
| DOM snapshot | `mcp__playwright__browser_snapshot` |

### Comprehensive Design Review

Invoke the `design-review` skill for thorough validation when:
- Completing a significant UI/UX feature
- Before finalizing any PR with visual changes
- Needing accessibility and full responsiveness testing

---

## Architecture

### Frontend (`mattress-store/`)

- **Framework**: Next.js 16 (App Router, TypeScript strict mode, React 19)
- **Styling**: CSS Modules (`.module.css` per component) + global CSS custom properties in `src/app/globals.css`
- **Fonts**: `next/font/google` — Source Serif 4 (headings) + Source Sans 3 (body), exposed as `--font-serif` / `--font-sans`
- **Images**: External via `saatva.imgix.net` CDN (configured in `next.config.ts`), using `next/image`
- **Imports**: Path alias `@/*` → `./src/*`
- **Medusa SDK**: `@medusajs/js-sdk` — initialized in `src/lib/medusa.ts`

### Backend (`selvara-backend/`)

- **Framework**: Medusa.js v2 — headless e-commerce backend
- **Database**: PostgreSQL (`selvara_dev`)
- **Cache/Events**: Redis
- **Publishable API key**: `pk_6849f8a52269e103056439faf43935c5474bf96426738cb68a25a2d706c0d71c`
- **Region**: Russia/RUB — `reg_01KJGGESE3CX5QZ8YXZPRPJFE3`
- **Payment**: `pp_system_default` (manual/COD — no real payment processing yet)
- **Seed script**: `selvara-backend/seed-selvara.mjs` — seeds all 7 products with 7 size variants each

### Routes (`src/app/`)

| Route | Description |
|-------|-------------|
| `/` | Homepage: Hero, ValueProps, ProductGrid, WhySelvara, Reviews, CTA |
| `/mattresses` | Catalog with FilterBar |
| `/mattresses/[slug]` | PDP — uses `generateStaticParams()` for SSG |
| `/[locale]/mattresses/[slug]` | Bilingual PDP (ru/en) |
| `/[locale]/checkout` | Checkout form — address, contact info, order summary |
| `/[locale]/order-success` | Post-order confirmation page |
| `/about` | Brand story, values grid |
| `/contact` | Contact info, help topics, FAQs |
| `/reviews` | Reviews with filters and summary |
| `/delivery-returns` | Delivery timeline, policies |

### Data Layer

**Static content** (`src/data/`) — product display, descriptions, specs:
- `products.ts` — Product array (catalog cards)
- `productDetails.ts` — Full product details keyed by slug (PDP pages)
- `types.ts` — TypeScript interfaces: `Product`, `ProductDetail`, `Review`, `SizePrice`, etc.
- `reviews.ts`, `helpTopics.ts`, `generalFaqs.ts` — Static content

**Dynamic / transactional** (Medusa/PostgreSQL):
- Carts, line items, orders — all via Medusa API
- Prices are stored in kopecks (×100), formatted with `Intl.NumberFormat` RUB

### Cart System

Cart state is managed globally via `src/contexts/CartContext.tsx`:
- `CartProvider` wraps the app in `Providers.tsx`
- Cart ID persisted in `localStorage` (`selvara_cart_id`)
- `CartSidebar` is rendered globally inside `Providers.tsx`

**Cart flow:**
1. PDP fetches Medusa variant IDs on mount (`fields: "*variants"`)
2. «Заказать» → `addItem(variantId, 1)` → sidebar opens
3. Sidebar → «Оформить заказ» → `/[locale]/checkout`
4. Checkout: `cart.update()` → `payment.initiatePaymentSession(pp_system_default)` → `cart.complete()`
5. Redirect to `/[locale]/order-success`

**Key fields in Medusa line items:**
- `title` — product name
- `variant_title` — size (e.g. "160×200") — NOT `subtitle`
- `unit_price` — in kopecks

### Component Pattern

Each component lives in `src/components/ComponentName/` with:
- `ComponentName.tsx` — functional component
- `ComponentName.module.css` — scoped styles

Global utility classes (`.section`, `.section-warm`, `.section-title`) are defined in `globals.css`.

### Key Design Patterns

- **Header** is `"use client"` — handles scroll-based transparency on homepage (transparent → solid on scroll), mobile burger menu, cart icon with badge
- **Hero** uses `::after` pseudo-element for bottom gradient fade into next section
- **FadeIn** wrapper component provides scroll-triggered entrance animations
- **ProductCard** uses full-image overlay style (image fills card, text over gradient)
- **WhySelvara** has two layouts: full-bleed duo cards (overlay style) + split image/text block
- **Two PDP routes exist**: `/mattresses/[slug]/page.tsx` AND `/[locale]/mattresses/[slug]/page.tsx` — update both when changing PDP components

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

### Photography & Visual Style

- Bedroom as a space of quiet and light — not a product on white background
- Natural morning light, warm muted tones, clean compositions
- No smiling people in pyjamas

### Mood

Silence. Light. Balance.
Confident quality without ostentatious luxury.
