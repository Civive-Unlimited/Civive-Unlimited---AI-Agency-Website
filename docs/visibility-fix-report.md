# Visibility Report Cleanup Notes

## Current public naming

- Primary offer: Visibility Report.
- Primary route: `/ai-search-report`.
- Free request route: `/free-visibility-report`.
- Service route: `/services/visibility-report`.
- Contact/request route: `/contact`.

## Legacy paths

Old AI-search report URLs are kept only as permanent redirects in `vercel.json`
so existing links do not break. New sitemap, llms, internal links, CTAs, and
visible page copy should use Visibility Report wording.

## Static crawl files

`scripts/prerender.mjs` writes the generated `sitemap.xml`, `robots.txt`, and
`llms.txt` to both `dist/public` and `client/public`. This keeps local dev,
preview, and production crawl files aligned after each build.

## Public asset rule

Do not commit private session asset URLs, temporary debug collectors, or
throwaway generated asset inventories into `client/public` or public docs.
