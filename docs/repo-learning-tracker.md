# Repo Learning Tracker

Purpose: track what has actually been sampled in this repository versus what remains unknown.

## Status Summary

- Overall state: `Partial`
- Confidence: MVP scaffold established
- Active baseline: global memory documents under `C:\Users\Lenovo\.codex\memories`

## Sampled Evidence

- Root directory was checked.
- Root workspace now contains a Next.js web app under `apps/web`.
- Root workspace now contains a Go API service under `apps/api`.
- `Neon + Prisma + better-auth + Cloudflare R2` environment placeholders were added to `.env.example`.
- Frontend production build succeeded.
- Go API tests succeeded.

## Folder Map

### Root

- Status: `Complete`
- Notes:
  - `AGENTS.md` is the local entry point.
  - Root `package.json` manages the web workspace and Go helper scripts.
  - `README.md` records the current stack and deployment targets.

### apps/web

- Status: `Partial`
- Notes:
  - Next.js App Router scaffold for landing page, onboarding, and dashboard.
  - Tailwind-based custom visual system with marketing and dashboard components.
  - Prisma schema and better-auth route exist, but live auth flows still need migration and UI wiring.

### apps/api

- Status: `Partial`
- Notes:
  - Go HTTP server exposes `/health`.
  - Railway deployment config exists.
  - Service shape is ready for trend normalization, scoring, and scheduled collection work.

## Open Questions

- What external data ingestion flow will be used first for Korean and Japanese trend sources?
- Will auth start with GitHub social login only, or also enable email/password in production?
- Which R2 object layout and image upload policy should be standardized for creator assets?

## Next Bootstrap Step

- Add Prisma migrations, real auth UI, and first dashboard API contracts.
