# AI Search and Trust Leak Field Kit Launch Note

## What changed

- Added the public product page at `/ai-search-trust-leak-field-kit`.
- Added the noindex fulfillment page at `/ai-search-trust-leak-field-kit/thank-you`.
- Added the printable field kit artifact at `/downloads/ai-search-trust-leak-field-kit`.
- Added prerender metadata, FAQ schema, offer schema, topical-map wiring, navigation, and footer links.

## Current sales path

- The Field Kit + Public Trust Audit bundle is priced at `$189`.
- The bundle includes the printable field kit, 24-point checklist, buyer-path worksheet, AI-search prompt pack, service-page clarity worksheet, 7-day fix order, Civive public-source audit read, and one first-fix recommendation.
- Do not route this bundle to the old `$99` audit checkout.
- The public page routes to contact until a live `$189` Stripe Payment Link is connected.

## Stripe note

- A `$29` standalone Field Kit product, price, and Payment Link were created only in Stripe test mode during implementation.
- Those test-mode objects were deactivated and were not wired into the website.
- Do not share test-mode Stripe links.
- The connected Stripe app tool failed with `Unknown tool: create_product` when trying to create the live `$189` bundle link.
- To sell the field kit bundle as instant checkout, create a live `$189` Payment Link and replace `site.fieldKitCheckoutUrl` in `client/src/content/site.ts`.

## Mason handoff

- Mason sales handoff:
  `C:\codex-work\civive-revenue-command\reports\mason-field-kit-sales-handoff-20260614.md`
- Offer routing rule:
  `C:\codex-work\civive-revenue-command\OFFER_ROUTER.md`

## Verification target

Run:

```powershell
pnpm run check
pnpm run build
pnpm run check:ai-search
pnpm run check:seo-guardrails
```
