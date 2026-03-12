# Security Rules

## Security posture

- Be secure by default.
- Treat auth, secrets, customer data, storage, billing, and admin surfaces as high-risk.
- Choose the safer path when speed and safety conflict, unless an incident explicitly requires temporary containment.
- Never trade away auditability or rollback safety for convenience.

## Secret handling

- Never commit secrets, tokens, private keys, connection strings, or raw credentials.
- Never print secrets into logs, terminal output, docs, screenshots, or commit messages.
- Prefer secret managers, environment injection, or local untracked env files already used by the repo.
- If a secret must be referenced, use its name, not its value.
- If a secret is suspected compromised, rotate or revoke with an impact map and recovery plan.
- Clean up accidental secret exposure immediately and document the follow-up.

## Auth and authorization

- Verify authentication and authorization separately.
- Enforce least privilege for admin, service, and automation paths.
- Do not trust client-side authorization.
- For session or token changes, verify login, refresh, logout, expiry, and privilege boundaries.
- For role changes, verify both allow and deny paths.

## Data handling

- Minimize access to production data.
- Avoid copying real sensitive data into local files, tests, screenshots, or public artifacts.
- Redact logs and reports by default.
- Preserve audit trails for data-changing operations where the product requires traceability.
- Before risky repairs or transforms, snapshot or otherwise preserve recoverability.

## Input and output boundaries

- Validate all external input.
- Encode or escape output appropriate to the sink.
- Guard file upload, path handling, serialization, template rendering, and shell boundaries carefully.
- Reject unsafe deserialization and unbounded parsing.
- For APIs, define explicit error models and do not leak internals in user-facing responses.

## Database and migration safety

- Review migrations for lock risk, data loss risk, compatibility risk, and rollback options.
- Use explicit transactions where the datastore supports them and where they reduce inconsistency risk.
- Treat row-level security, triggers, stored procedures, and background jobs as code that needs review and tests.
- Do not perform destructive cleanup until compatibility code is live and verified.

## Dependency and supply chain rules

- Prefer pinned or bounded dependency versions consistent with the repo standard.
- Read changelogs for major upgrades and security-sensitive packages.
- Remove unused dependencies when touching a surface with obvious bloat or risk.
- Verify install scripts, generated code, and vendor CLIs before trusting them in release flow.
- Do not normalize flaky or failing security checks.

## Logging and observability

- Use structured logs where the system already supports them.
- Log enough context to debug safely without leaking secrets or private data.
- Add correlation IDs, request IDs, or job IDs when tracing cross-service failures.
- Alerts should point to operator action, not just noise.

## Deployment and infra security

- Review env changes like code.
- Verify network policy, storage exposure, admin panels, webhook secrets, and third-party credentials when those surfaces change.
- For Vercel, Supabase, and cloud services, confirm environment separation and least-privilege service credentials.
- Do not ship debug modes, open admin routes, or broad CORS rules as shortcuts.

## Security incident handling

- Contain first.
- Preserve evidence.
- Revoke or rotate the smallest necessary credential set.
- Check logs, sessions, audit trails, and dependent services.
- Confirm recovery, then add the missing preventive guardrail.

## Approval boundaries

Stop and ask before actions that would:

- expose or export sensitive data beyond the current safe boundary
- rotate production secrets without enough information to recover dependent systems
- make destructive security changes with unclear blast radius
- disable critical controls without an active incident justification
