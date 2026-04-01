# CHASM

CHASM is a creator intelligence SaaS focused on character-IP monetization, competitive benchmarking, and Japan market expansion.

## Stack

- Web: Next.js, TypeScript, Tailwind CSS, Prisma, better-auth
- API/worker: Go
- Database: Neon Postgres
- Storage: Cloudflare R2
- Frontend deploy: Vercel
- Backend deploy: Railway

## Apps

- `apps/web`: landing page, onboarding, dashboard shell
- `apps/api`: Go HTTP API and background job entry points

## Scripts

- `npm run dev:web`
- `npm run build:web`
- `npm run lint:web`
- `npm run typecheck:web`
- `npm run dev:api`
- `npm run build:api`
- `npm run test:api`
