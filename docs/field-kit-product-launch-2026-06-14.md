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
- The public page routes to the live `$189` Stripe Payment Link:
  `https://buy.stripe.com/28EaEYfodcg6ceS4S1ebu0M`

## Stripe note

- Live Stripe product: `prod_UhrdbNArf145Z7`.
- Live Stripe price: `price_1TiRtsKOVLnwNtPL3aC7vWey`.
- Live Stripe Payment Link: `plink_1TiRtsKOVLnwNtPLKex3AhXZ`.
- Do not share test-mode Stripe links.
- Do not use the old `$99` audit checkout for this bundle.

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
