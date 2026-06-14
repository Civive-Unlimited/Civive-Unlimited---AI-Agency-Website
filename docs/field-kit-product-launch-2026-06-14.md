# AI Search and Trust Leak Field Kit Launch Note

## What changed

- Added the public product page at `/ai-search-trust-leak-field-kit`.
- Added the noindex fulfillment page at `/ai-search-trust-leak-field-kit/thank-you`.
- Added the printable field kit artifact at `/downloads/ai-search-trust-leak-field-kit`.
- Added prerender metadata, FAQ schema, offer schema, topical-map wiring, navigation, and footer links.

## Current checkout path

- The public page uses the existing live $99 AI Search and Trust Leak Audit checkout:
  `https://buy.stripe.com/aFa9AU4Jz7ZQ1Aebgpebu0K`
- Public copy positions the field kit as bundled with the $99 audit until a live standalone field-kit checkout exists.

## Stripe note

- A `$29` standalone Field Kit product, price, and Payment Link were created only in Stripe test mode during implementation.
- Those test-mode objects were deactivated and were not wired into the website.
- Do not share test-mode Stripe links.
- To sell the field kit as a standalone low-ticket product later, create a live Payment Link and replace `site.fieldKitCheckoutUrl` in `client/src/content/site.ts`.

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
