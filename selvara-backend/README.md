# SELVARA Backend

Medusa v2 backend for the SELVARA mattress store.

## Local Development

Prerequisites: PostgreSQL 16, Redis 7, Node.js >= 20.

```bash
# 1. Install dependencies
pnpm install

# 2. Create database
createdb selvara_dev

# 3. Run migrations
pnpm medusa db:migrate

# 4. Create admin user
pnpm medusa user --email admin@selvara.ru --password selvara2024

# 5. Start dev server (port 9000)
npm run dev
```

Admin panel: http://localhost:9000/app

## Production (Docker)

### 1. Configure environment

Create `.env.prod` from the template:

```bash
cp .env.template .env.prod
```

Fill in `.env.prod`:

```env
POSTGRES_PASSWORD=<strong-password>
JWT_SECRET=<random-64-char-hex>
COOKIE_SECRET=<random-64-char-hex>
STORE_CORS=http://<your-ip>:3000
ADMIN_CORS=http://<your-ip>:9000
AUTH_CORS=http://<your-ip>:9000
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=<admin-password>
```

Generate secrets:
```bash
openssl rand -hex 32  # for JWT_SECRET
openssl rand -hex 32  # for COOKIE_SECRET
```

### 2. Build and start

```bash
docker compose --env-file .env.prod up -d --build
```

This starts 3 services:
- **PostgreSQL** (port 5432)
- **Redis** (port 6379)
- **Medusa backend** (port 9000)

On startup, the backend automatically:
1. Runs database migrations
2. Starts the Medusa server
3. Runs `init.mjs` which creates the admin user and publishable API key

### 3. Get the publishable API key

```bash
docker compose --env-file .env.prod logs backend | grep PUBLISHABLE_KEY
```

Add the key to the frontend `.env`:
```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_xxxxx
```

### 4. Seed products (first time only)

```bash
# From your local machine (with backend running)
node seed-selvara.mjs
```

### Useful commands

```bash
# View logs
docker compose --env-file .env.prod logs -f backend

# Restart
docker compose --env-file .env.prod restart backend

# Rebuild from scratch
docker compose --env-file .env.prod down
docker compose --env-file .env.prod up -d --build

# Check service status
docker compose --env-file .env.prod ps
```
