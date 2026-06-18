# Civive Unlimited Website

Production website for Civive Unlimited. The site is a Vite, React, TypeScript, and Vercel application focused on AI search visibility, service-business lead capture, CiviveOS offers, and paid audit/field-kit routes.

## Stack

- React 19, TypeScript, Vite, Wouter
- Tailwind CSS 4 and Radix UI primitives
- Vercel serverless functions under `api/`
- Static prerender output under `dist/public`
- `pnpm` package management

## Local Setup

```powershell
pnpm install
pnpm run check
pnpm run build
pnpm run preview -- --host 127.0.0.1 --port 4173
```

Run all package commands from the repo root.

## Environment

Copy `.env.example` to a local `.env` for development values. Never commit real env files or secret values.

Important server-side env groups:

- Lead capture and CiviveOS routing tokens
- Lead backup and owner notification webhooks
- Dry-run/smoke-test tokens

Important public env groups:

- Website chat widget configuration
- Public frontend service endpoints

## Scripts

- `pnpm run check`: TypeScript validation
- `pnpm run build`: client build, SSR bundle, and prerender
- `pnpm run release:seo`: build plus AI-search, SEO, lead, tracking, and outbound contract checks
- `pnpm run check:seo-live`: live production SEO smoke checks
- `pnpm run submit:indexnow:dry`: dry-run IndexNow submission

## Deployment

Vercel installs with `pnpm install`, builds with `pnpm run build`, and serves `dist/public`.

Before production deploys, run the local release checks, confirm `git status` is clean except intended edits, and verify critical live paths after the deployment:

- `/`
- `/contact`
- `/ai-search-report`
- `/ai-search-trust-audit`
- `/ai-search-trust-leak-field-kit`
- `/civive-os`

## Repo Hygiene

- Keep generated output in ignored folders such as `dist/` and `output/`.
- Keep durable operational notes in `docs/`, not loose root scratch files.
- Keep productized offer links in `client/src/content/site.ts` or the relevant page content.
- Do not commit secrets, private client data, temporary debug collectors, or raw local logs.
