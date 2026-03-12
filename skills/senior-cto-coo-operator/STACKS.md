# Stack Guidance

Read only the sections relevant to the current repo. Do not import unnecessary rules into the task.

## Python

- Use the repo's existing runner and environment manager first: `uv`, `poetry`, `pip`, or project venv.
- Keep business logic separate from framework glue.
- Use typed boundaries for inputs and outputs.
- Prefer pure functions for core calculations and explicit objects for stateful flows.
- Add regression tests next to the changed module.
- For async code, enforce timeouts, cancellation handling, and bounded retries.
- For CLIs and jobs, return structured artifacts and non-zero exits on failure.
- Avoid hidden import-time side effects.

## TypeScript and Node

- Respect the existing package manager and scripts.
- Keep runtime boundaries clear: browser, server, worker, shared.
- Keep `strict` TypeScript behavior where the repo already supports it.
- Validate environment variables at startup, not halfway through a request.
- Prefer discriminated unions and typed API contracts over stringly typed branching.
- For backend handlers, enforce auth, input validation, timeout budgets, and structured errors.
- For frontend work, fix actual state, loading, and error behavior instead of papering over it with cosmetic changes.

## React and frontend delivery

- Preserve the existing design system unless the task is explicitly a redesign.
- Treat loading, empty, error, and retry states as first-class behavior.
- Avoid accidental client-server boundary leaks.
- Measure user-visible behavior with a smoke test when the workflow is business-critical.
- Keep component state readable. Do not hide complexity behind memoization churn or generic hooks unless they reduce real risk.

## C++

- Use the repo's build system and standard flags first: CMake, Ninja, Make, Bazel, or project scripts.
- Favor RAII, explicit ownership, and narrow interfaces.
- Enable sanitizers in debug flows when feasible.
- Treat warnings as a quality signal, not noise.
- Keep undefined behavior risk low: bounds, lifetime, thread safety, and signedness matter.
- Write focused tests for parsing, memory ownership, concurrency, and serialization boundaries.

## SQL and databases

- Treat schema changes as product changes, not just code changes.
- Use migrations that are explicit, versioned, and reviewable.
- Prefer expand-contract for live systems.
- Never combine destructive schema steps with application cutover in one blind move.
- Run explain plans or query review for new heavy reads and writes.
- Add indexes deliberately and understand lock behavior.
- Preserve auditability for sensitive data changes.

## APIs and integrations

- Define contracts clearly: request shape, response shape, error model, auth model, idempotency behavior.
- Use timeouts at every remote boundary.
- Retry only safe operations and always with bounds.
- Propagate correlation IDs where possible.
- Handle rate limits and partial failure paths explicitly.
- Stub or fixture critical third-party behavior for tests when live calls are unstable or expensive.

## Vercel

- Default to preview deploys for web or API changes when Vercel is in play.
- Verify build output, environment variables, runtime target, and serverless limits before shipping.
- Check edge versus node runtime assumptions.
- Confirm redirect, rewrite, and middleware behavior with smoke coverage on auth and critical routes.
- For production, know the last good deployment and the rollback path before pushing.

## Supabase

- Keep schema changes in migrations under version control.
- Review row-level security rules like production code.
- Never expose service-role credentials to the client.
- Validate auth flows, storage access, and RPC behavior after changes.
- Before risky data changes, snapshot what matters and document recovery steps.
- Treat policies, triggers, and background jobs as operational code, not admin glue.

## GitHub and CI/CD

- Read the existing CI pipeline before changing it.
- Keep checks fast enough to be used and strong enough to matter.
- Add targeted jobs for critical paths instead of bloated all-or-nothing pipelines.
- Make release gates explicit: tests, builds, smoke, deploy checks, migration checks, or artifact generation.
- If CI is flaky, fix the flake or isolate it. Do not normalize failing pipelines.

## Cloud and infrastructure

- Prefer infrastructure as code when the repo already uses it.
- Keep secrets in secret managers or environment injection, not source control.
- Treat IAM, network policy, storage policy, and backups as first-class application dependencies.
- Verify health checks, alerting, and rollback behavior for the changed service.
- For distributed systems, watch latency, retries, queue depth, dead letters, and partial outage behavior.
