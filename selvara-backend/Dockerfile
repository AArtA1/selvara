# ── Stage 1: deps ──────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: builder ───────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Отключаем сборку admin-панели — экономит 3-5 минут
ENV DISABLE_MEDUSA_ADMIN=true
RUN npm run build

# ── Stage 3: runner ────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy build output and production deps
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 9000

# Run migrations then start
CMD ["sh", "-c", "node .medusa/server/index.js"]
