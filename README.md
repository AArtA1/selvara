# SELVARA

Premium Russian DTC mattress brand — e-commerce website.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 (App Router, TypeScript, React 19) |
| Backend | Medusa.js v2 (headless e-commerce) |
| Database | PostgreSQL 16 |
| Cache / Events | Redis |
| Styling | CSS Modules + CSS custom properties |

## Project structure

```
selvara/
├── mattress-store/     # Next.js frontend (port 3000)
└── selvara-backend/    # Medusa.js backend (port 9000)
```

## Getting started

### Prerequisites

```bash
brew install postgresql@16 redis
brew services start postgresql@16
brew services start redis
```

### Backend

```bash
cd selvara-backend
cp .env.template .env   # fill in DATABASE_URL
npm install
npm run dev             # http://localhost:9000
```

Seed products:
```bash
node seed-selvara.mjs
```

Admin panel: `http://localhost:9000/app`

### Frontend

```bash
cd mattress-store
npm install
# create .env.local:
# NEXT_PUBLIC_MEDUSA_URL=http://localhost:9000
# NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<your key from Medusa admin>
npm run dev             # http://localhost:3000
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/mattresses` | Product catalog |
| `/mattresses/[slug]` | Product detail page |
| `/[locale]/checkout` | Checkout |
| `/[locale]/order-success` | Order confirmation |
| `/about` | Brand story |
| `/reviews` | Customer reviews |
| `/delivery-returns` | Delivery & returns policy |

## Cart flow

1. PDP → «Заказать» → cart sidebar opens
2. Sidebar → «Оформить заказ» → `/ru/checkout`
3. Checkout form → confirm → order created in Medusa/PostgreSQL
4. Redirect to `/ru/order-success`
