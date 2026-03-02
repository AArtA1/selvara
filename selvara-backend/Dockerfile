# ── Stage 1: deps ──────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --shamefully-hoist

# ── Stage 2: builder ───────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# ── Stage 3: runner ────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=development

# Copy build output and production deps
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/medusa-config.ts ./medusa-config.ts
COPY --from=builder /app/init.mjs ./init.mjs

EXPOSE 9000

CMD ["sh", "-c", "./node_modules/.bin/medusa db:migrate && ./node_modules/.bin/medusa start & node init.mjs; wait"]
