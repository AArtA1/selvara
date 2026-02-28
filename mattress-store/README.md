# SELVARA — Frontend

Next.js 16 storefront for SELVARA. See root [README](../README.md) for full setup.

```bash

npm install
npm run dev    # http://localhost:3000
npm run build  # production build + TypeScript check
npm run lint   # ESLint
```

Requires Medusa backend running on port 9000 and `.env.local` with:

```
NEXT_PUBLIC_MEDUSA_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<key>
```
