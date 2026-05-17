# Security And Visibility Report Cleanup - 2026-05-17

## Scope

- Civive Unlimited website repo.
- Public website routes, lead API contract, tracking API contract, SEO crawl files, public static assets, package dependencies, and local production preview.
- HighLevel live funnel was checked from the public URL, but this repo does not control that hosted funnel page.

## Fixed

- Renamed the public offer path and copy from the old AI-search audit language to Visibility Report.
- Added redirects from old report URLs to the current Visibility Report URLs.
- Replaced the third-party embedded report widget path with the first-party `/contact` lead path.
- Removed the public Manus debug collector from `client/public`.
- Removed private Manus session asset URL inventories and unused old components that referenced them.
- Removed the unused `vite-plugin-manus-runtime` package.
- Added tracking-event redaction for sensitive URL/query/metadata keys before server logging.
- Generated both clean URL `.html` files and directory `index.html` files so preview and Vercel clean URLs serve the correct prerendered HTML.
- Regenerated `sitemap.xml` and `llms.txt` with Visibility Report paths and wording.

## Security Checks Run

- `pnpm audit --audit-level moderate`
- `pnpm run check`
- `pnpm run release:seo`
- Secret-pattern scan for common API keys, GitHub tokens, private keys, SendGrid keys, AWS access keys, OpenAI-style keys, and old Manus/private-session artifacts.
- Public wording/path scan for old AI-search audit wording outside of legacy redirect rules.
- `git diff --check`
- Rendered preview smoke with Chromium at desktop and mobile widths for:
  - `/`
  - `/ai-search-report`
  - `/free-visibility-report`
  - `/contact`
  - `/services/visibility-report`

## Results

- No known moderate-or-higher dependency vulnerabilities were reported.
- TypeScript check passed.
- Production build and prerender passed for 58 routes.
- AI search readiness check passed for 58 prerendered routes.
- SEO guardrail check passed for 58 routes and 50 topical pages.
- Lead contract smoke passed without writing live CRM data.
- Tracking contract smoke passed.
- Rendered preview smoke passed with no console errors, no page errors, required copy present, and no horizontal overflow on checked desktop/mobile pages.
- No obvious committed secrets or private Manus session URLs were found after cleanup.

## Remaining Live Gap

- `https://www.civiveunlimited.com/ai-search-report` was not live before deployment from this repo.
- `https://get.civiveunlimited.com/ai-search-audit-2338` still contained old readiness-audit wording when checked.
- Available HighLevel tools can read CRM/account data, but no safe funnel/page edit tool was exposed in this environment. The website now routes primary report CTAs to the first-party `/contact` path until that hosted funnel can be edited or replaced.

## Notes

- This was a repo security and release-readiness pass, not a formal third-party penetration test.
- No website can be guaranteed unhackable. The current repo state removes the issues found in this pass and passes the local release gates listed above.
