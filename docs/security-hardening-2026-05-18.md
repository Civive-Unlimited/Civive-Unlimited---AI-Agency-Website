# Security Hardening Pass - 2026-05-18

## Scope

- Civive Unlimited primary website repo.
- Public lead API and tracking API.
- Vercel routing and security headers.
- Visibility Report wording and legacy audit redirects.
- Static scans for risky browser/server sinks and common committed secret patterns.
- Dependency audit through pnpm.
- Live public checks for the Vercel website and the separate HighLevel funnel page.

## Fixed In This Pass

- Redacted sensitive `sourcePage` query values before lead data is previewed or written into CiviveOS notes.
- Stopped returning downstream HighLevel side-effect error details through the public lead API response.
- Renamed one remaining internal `auditContactHref` code variable to `reportContactHref` so the code matches the Visibility Report offer.
- Added a lead-contract smoke assertion proving raw sensitive source-page query data does not remain in the HighLevel note preview.

## Validation Run

- `pnpm audit --audit-level moderate`
- `pnpm run check`
- `pnpm run build`
- `pnpm run check:lead-contract`
- `pnpm run check:track-contract`
- `pnpm run check:seo-guardrails`
- `pnpm run check:ai-search`
- `git diff --check`
- Static secret-pattern scan for common private keys and API tokens.
- Static sink scan for risky client/server patterns such as `dangerouslySetInnerHTML`, `eval`, `new Function`, raw token handling, broad CORS, redirects, and browser storage.
- Live `curl` checks for:
  - `https://www.civiveunlimited.com/ai-search-report`
  - `https://www.civiveunlimited.com/ai-search-audit`
  - `https://get.civiveunlimited.com/ai-search-audit-2338`

## Results

- No moderate-or-higher dependency vulnerabilities were reported by pnpm.
- TypeScript check passed.
- Production build and prerender passed.
- Lead API contract passed, including dry-run authorization, honeypot handling, SMS consent validation, oversized body rejection, malformed JSON handling, and sensitive source-page query redaction.
- Tracking API contract passed.
- SEO guardrails passed for 58 routes and 50 topical pages.
- AI search readiness check passed for 58 prerendered routes.
- No high-confidence committed secrets were found in the website repo after excluding generated build output, dependencies, git internals, and Canva SVG certificate metadata.
- Vercel security headers are configured for HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- The Vercel website uses Visibility Report wording and redirects legacy audit paths.

## Remaining Live Gap

- `https://get.civiveunlimited.com/ai-search-audit-2338` is a separate HighLevel-hosted funnel and still says `AI Search Readiness Audit` and `Get My Free Audit`.
- The local website repo does not control that page.
- The HighLevel tool surface available in this environment did not expose a safe funnel page update operation.
- Fixing that hosted funnel requires the HighLevel page editor or a confirmed page-update API path.

## Security Notes

- This pass improves the lead intake data boundary and public API error boundary.
- This is not a formal third-party penetration test.
- No website can be guaranteed unhackable, but the checks above passed and the code issues found in this pass were fixed locally.

