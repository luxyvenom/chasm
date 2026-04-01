# Repository Working Rules

Purpose: bootstrap local memory for this repository while deferring to the global memory set until repo-specific rules exist.

## Default Memory Sources

Read these first for any work in this repository:

1. `C:\Users\Lenovo\.codex\memories\global-memory-index.md`
2. `C:\Users\Lenovo\.codex\memories\global-coding-preferences.md`
3. `C:\Users\Lenovo\.codex\memories\global-code-convention.md`
4. `C:\Users\Lenovo\.codex\memories\new-repo-bootstrap-memory.md`

## Priority

1. Files and workflows created inside this repository override global defaults when they are explicit.
2. Until local rules exist, use the global memory documents as the active baseline.
3. Do not assume one repository-wide style before representative files exist.

## Current Repository State

- Repository now has a web app under `apps/web` and a Go API service under `apps/api`.
- Frontend stack: Next.js, TypeScript, Tailwind CSS, Prisma, better-auth.
- Backend stack: Go HTTP service intended for Railway deployment.
- Treat repository-specific files as the local source of truth when they conflict with the global baseline.

## Bootstrap Rules

- When source files are introduced, sample the actual tree before making broad stylistic choices.
- Create or update local rules here when the repository develops conventions that differ from the global baseline.
- Record folder-by-folder confidence and discovered risks in `docs/repo-learning-tracker.md`.
- Keep marketing UI and dashboard UI in the same Next.js app unless there is a clear deployment reason to split them.
- Keep data collection, scoring, and scheduled jobs in Go unless a Python-specific workload is deliberately introduced later.
