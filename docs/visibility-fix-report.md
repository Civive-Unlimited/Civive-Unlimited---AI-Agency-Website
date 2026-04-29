# Visibility Fix Report

## Files changed

- `client/src/content/seo.ts`
- `client/src/content/site.ts`
- `client/src/content/topical-map.ts`
- `client/src/prerender-routes.ts`
- `client/src/App.tsx`
- `client/src/entry-server.tsx`
- `scripts/prerender.mjs`
- `scripts/audit-ai-search-readiness.mjs`
- `vite.config.ts`
- `client/src/pages/ServicePage.tsx`
- `client/src/pages/SpringfieldServiceAreaPage.tsx`
- `client/src/pages/AuditPage.tsx`
- `client/src/pages/ContactPage.tsx`
- `client/src/components/Footer.tsx`
- `client/src/components/sections/ContactSection.tsx`
- `client/src/components/sections/HomeAuthorityMapSection.tsx`
- `client/index.html`
- `client/public/sitemap.xml`
- `client/public/llms.txt`

Additional copy-only normalization changed visible software references to `CiviveOS` across existing pages.
The production chunk config was also tightened after browser smoke found a React/vendor circular import runtime error in preview.

## Pages added

- `/services/ai-search-visibility-audit`
- `/services/google-business-profile-optimization`
- `/services/ai-receptionist`
- `/services/missed-call-recovery`
- `/services/website-design-service-businesses`
- `/services/review-automation`
- `/services/crm-lead-follow-up`
- `/service-areas/springfield-mo`

## Schema added

- Full `Organization` schema with legal name, URL, logo, phone, email, founder, and postal address.
- `ProfessionalService` local business schema with address, phone, email, area served, price range, image/logo, and description.
- Homepage `Service` schema entries for the requested core services.
- Route-level `Service` schema for service pages and the Springfield service-area page.
- FAQPage schema remains limited to visible FAQ content.

## Metadata changed

- Homepage title and description now match the requested local visibility positioning.
- New service pages and Springfield page have unique titles, descriptions, canonicals, OG tags, and Twitter tags through the prerender pipeline.
- Base `client/index.html` fallback metadata now matches the homepage and no longer uses a keyword meta tag.

## Internal links added

- Homepage authority map links to the new service pages and Springfield service-area page.
- Each service page links to the homepage, audit page, related services, contact page, and Springfield page.
- Springfield page links to each service page, homepage, audit page, contact page, and industries hub.
- Footer links now include service, contact, Springfield, NAP, website, and areas-served signals.

## Sitemap changes

- Dynamic prerender sitemap now includes the new service pages and `/service-areas/springfield-mo`.
- `client/public/sitemap.xml` was synced to the generated sitemap.
- `robots.txt` continues to allow important crawlers and points to `https://www.civiveunlimited.com/sitemap.xml`.
- `llms.txt` now includes the address, local service area, new services, and Springfield page.

## Skipped items and why

- No `sameAs` social URLs were added because no verified social profile URLs were found in current project content.
- No `openingHours` were added because hours are not currently visible on the site.
- No `hasMap` or geo coordinates were added because no verified Google Maps URL or verified coordinates were present in the project.
- No reviews, ratings, awards, badges, case studies, clients, or fake proof were added.

## Validation run

- `pnpm run check` passed.
- `pnpm run build` passed and prerendered 51 routes.
- `pnpm run audit:ai-search` passed for 51 prerendered routes.
- `pnpm run audit:seo-guardrails` passed for 51 routes and 49 topical pages.
- `pnpm run audit:lead-contract` passed.
- `pnpm run lint` was checked but no lint script exists.
- `pnpm run typecheck` was checked but no typecheck script exists; this repo uses `pnpm run check`.
- Manual generated-output inspection passed for homepage, audit page, service pages, Springfield page, FAQ, contact page, footer NAP, schema, sitemap, and robots.
- Playwright browser smoke passed for homepage, `/services/ai-search-visibility-audit/`, and `/service-areas/springfield-mo/` on desktop and mobile with no console errors or horizontal overflow.

## Manual steps Scott needs to do next

- Submit `https://www.civiveunlimited.com/sitemap.xml` in Google Search Console.
- Run the homepage and new service/local pages through Google Rich Results Test.
- Request indexing in Google Search Console for the homepage, service pages, and Springfield page.
- Check that the Google Business Profile website link points to `https://www.civiveunlimited.com`.
