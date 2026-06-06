# Visibility Form Fix Report

Date: 2026-06-02

## What was broken

The website visibility report form posted to `/api/lead`, and the server tried to write directly to LeadConnector/CiviveOS before any backup capture happened.

When the configured server token did not have access to the configured location or endpoint, the API returned the external auth error to the browser. That created two failures:

- The visitor could see a raw token/access error instead of a clean confirmation.
- The lead could be lost because there was no guaranteed backup record before the external CRM/report call.

The live root cause was a server-side CiviveOS token selection mismatch: the working keeper token is configured under the target-location names used by the local MCP connector, while the website was preferring the stale legacy `GHL_LOCATION_API_KEY` value. Tokens are still server-side only.

Because side-effect calls for tags, notes, and opportunities were already caught as warnings, a raw visitor-facing `token does not have access` error had to come from the required contact write path. The primary failing endpoint class is `POST /contacts/upsert` against `https://services.leadconnectorhq.com`.

## Files changed

- `api/lead.js`
  - Saves the lead before any external API call.
  - Attempts owner notification independently of CiviveOS routing.
  - Returns a clean received confirmation when external routing fails.
  - Logs safe external routing details without exposing secrets.

- `server/leadCapture.js`
  - Adds append-only local backup capture.
  - Adds optional durable backup webhook support.
  - Adds optional owner notification webhook support.
  - Redacts token-like values from error records and logs.

- `server/highlevel.js`
  - Adds non-secret external service/path/status context to LeadConnector errors so token/location failures can be diagnosed.

- `client/src/components/sections/ContactSection.tsx`
  - Uses the server confirmation message.
  - Prevents raw token, permission, or provider errors from showing in the visitor UI.

- `.env.example`
  - Adds lead backup, notification, dry-run, and public map proxy env names with no real secrets.

- `scripts/lead-api-contract-smoke.mjs`
  - Adds a contract check for the exact token-access failure class.
  - Verifies fallback response, local backup capture, owner notification attempt, and secret-safe error records.

## Form surfaces inspected

- `/contact`
- `/free-visibility-report`
- `/ai-search-report`
- `/services/visibility-report`
- shared `ContactSection` form
- `/api/lead`
- `server/highlevel.js`
- tracking API and event helper
- env example and Vercel config

The only active first-party lead form submit handler is `ContactSection`, reused on the contact and free report pages. Other report pages route visitors to that form.

## Audit notes

- No local `.env` file was present to verify live token values by name.
- No hardcoded real API token was found in the audited website lead path.
- The only token-like scan hit after the fix is the fake `test-token-without-location-access` value used by the lead contract smoke test.
- The frontend does not expose the private CiviveOS token. The private token remains server-side under non-`VITE_` env names.
- Vercel config serves `dist/public`; serverless env values still need to be set in the Vercel project for production.

## New lead protection behavior

Each valid submitted lead is captured before external routing with:

- name
- business name
- email
- phone
- website
- message
- request type
- source page
- timestamp
- submission status
- external API/report status
- safe error message if external routing fails

Local backup default:

- Local/dev: `output/lead-captures/visibility-report-leads.ndjson`
- Vercel/serverless emergency buffer: `/tmp/civive-lead-captures/visibility-report-leads.ndjson`

Production should also configure `CIVIVE_LEAD_BACKUP_WEBHOOK_URL` for durable storage outside serverless `/tmp`.

## Required environment variables

Server-only:

- `GHL_TARGET_LOCATION_API_KEY` or `HIGHLEVEL_TARGET_LOCATION_TOKEN`
- `GHL_LOCATION_API_KEY` as a legacy fallback only
- `GHL_LOCATION_ID`
- `GHL_PIPELINE_ID`
- `GHL_PIPELINE_STAGE_ID`
- `CIVIVE_LEAD_BACKUP_WEBHOOK_URL`
- `CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL`
- `CIVIVE_LEAD_DRY_RUN_TOKEN`

Optional local/serverful backup:

- `CIVIVE_LEAD_BACKUP_DIR`

Public/browser:

- `VITE_GHL_CHAT_WIDGET_ID`
- `VITE_FRONTEND_FORGE_API_KEY`
- `VITE_FRONTEND_FORGE_API_URL`

## Validation run

Passed:

- `pnpm run check:lead-contract`
- `pnpm run check`
- `pnpm run build`
- `git diff --check`

The lead contract specifically verifies:

- valid dry-run form contract
- sensitive source-page query redaction
- validation errors
- oversized payload rejection
- honeypot handling
- production dry-run authorization
- simulated `token does not have access` external failure
- local backup capture before external API routing
- owner notification webhook attempt
- safe external failure recording without exposing token values

## What to verify after deployment

1. Submit the website form with a test lead.
2. Confirm the visitor sees: `Your request was received. We'll review it and follow up.`
3. Confirm the backup sink receives a record before CiviveOS routing.
4. Confirm Scott receives the notification webhook event.
5. Confirm the CiviveOS contact/opportunity writes succeed after the token/location env is corrected.

## Remaining production action

The code now protects the lead even when CiviveOS routing fails, and the website should prefer a valid target-location token that has access to location `FySiQXrk1tIwqcZOlnYG`. Production still needs durable `CIVIVE_LEAD_BACKUP_WEBHOOK_URL` and `CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL` values for storage/notification outside serverless `/tmp`.
