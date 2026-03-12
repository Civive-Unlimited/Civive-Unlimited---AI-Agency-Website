# Incident Response

## Incident posture

- Restore safe service fast.
- Contain blast radius before chasing perfect root cause.
- Preserve evidence when security, data integrity, or compliance is involved.
- State facts, not guesses.
- Do not mix opportunistic feature work into incident handling.

## Severity model

- `S0`: active security compromise, active data corruption, or broad service outage with major business impact.
- `S1`: critical user-facing outage or severe degradation on a core path.
- `S2`: partial degradation, elevated failure rate, or degraded internal system with manageable workaround.
- `S3`: localized defect, non-critical regression, or operational issue with low user impact.

## First 15 minutes

- Confirm severity.
- Confirm current symptoms and timestamps.
- Identify the latest known-good deploy or config state.
- Check whether the issue aligns with a recent code, config, secret, infra, or vendor change.
- Decide containment:
  - rollback
  - feature flag
  - traffic reduction
  - queue pause
  - credential revoke
  - dependency failover

## Triage order

- user impact
- security exposure
- data safety
- ability to recover quickly
- ability to gather evidence

## Core workflow

1. Stabilize.
   - Stop the bleeding first.
   - Roll back or disable the broken path if that is faster and safer than debugging live.

2. Scope.
   - Identify who is affected, what flows are broken, and whether data is wrong or just delayed.
   - Check logs, traces, metrics, queue depth, and recent deploys.

3. Contain.
   - Reduce blast radius with flags, throttles, queue stops, route blocks, or privilege reduction.
   - For security issues, isolate credentials, sessions, or network paths as needed.

4. Fix or recover.
   - Use the smallest safe recovery step.
   - Prefer known-good rollback over speculative hotfixes.
   - If rollback is impossible, land the minimum viable hotfix with targeted validation.

5. Verify.
   - Confirm service recovery from the actual user path.
   - Confirm side systems: jobs, queues, auth, storage, notifications, webhooks, billing.

6. Document.
   - Record cause, timeline, mitigation, residual risk, and next actions.

## Common incident patterns

### Bad deploy

- Compare current release to last known-good.
- Roll back first if blast radius is significant.
- If not rolling back, feature-flag or disable the new path.
- Add a regression test or smoke before re-release.

### Auth outage

- Check env vars, session config, auth provider status, redirects, cookie or token settings, and recent middleware changes.
- Verify both login and session persistence.
- Roll back quickly if auth broke on a fresh deploy.

### Migration or data issue

- Stop writes if corruption is active.
- Determine whether data is wrong, missing, duplicated, or just delayed.
- Restore from known-good state or roll forward with a repair plan only if it is safer than rollback.
- Record exact affected records and repair logic.

### Queue or worker backlog

- Measure backlog, throughput, dead letters, retries, and downstream dependency health.
- Stop poison-pill retries.
- Scale or batch only after confirming the root failure mode.
- Verify idempotency before replaying work.

### Secret leak or suspicious access

- Contain immediately.
- Revoke or rotate the affected credential with an impact map.
- Audit dependent systems and sessions.
- Preserve logs and evidence.
- Re-issue least privilege credentials, not broad replacements by habit.

## Communication rules

- Keep updates short and factual.
- Say what is known, what is unknown, what is being done now, and what the next checkpoint is.
- Do not speculate or soften risk.
- Do not declare resolved until the user path is actually healthy.

## Post-incident minimum

- Leave a concise incident note or handoff.
- Add the missing guardrail: test, alert, smoke, timeout, retry bound, dashboard, or runbook.
- If the incident came from process failure, tighten the release gate, not just the code.
