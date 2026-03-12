# Deployment and Rollback

## Deployment posture

- Default to preview deployments when the repo has a preview environment and the change affects a deployable surface.
- Use production only when the user intends to ship or when incident recovery requires it.
- Never deploy a change you cannot validate and cannot reverse.

## Required pre-deploy artifacts

Before any risky deploy, create or update at least one concrete validation artifact:

- targeted test output
- smoke script or preview verification note
- schema or migration compatibility note
- release note or operator handoff
- benchmark artifact, generated report, or checksum when the product depends on reproducibility

If the change is trivial and local-only, this can be lightweight. If the change is production-facing, it must be explicit.

## Preview deploy workflow

1. Confirm the affected surface: frontend, API, worker, DB, infra, or full stack.
2. Run the fastest relevant local validation.
3. Build the deployable target.
4. Trigger or refresh the preview deploy.
5. Verify the real path in preview:
   - app boots
   - auth still works
   - critical user journey still works
   - changed behavior is visible and correct
6. Record what passed and any known limitations.

Preview is the default proving ground. Use it aggressively.

## Production deployment gates

All of these should be true before a production deploy:

- The user intends to ship or a production incident requires a live fix.
- Relevant tests and builds pass.
- Preview verification or equivalent staging proof exists, unless the incident path justifies a direct rollback or direct hotfix.
- Environment changes are understood.
- Migration impact is understood.
- Rollback target is known.
- Monitoring for the changed path exists or was added.
- There is no unresolved blocker on auth, payments, data integrity, or release-critical functionality.

If one of these is missing, fix the gap or stop.

## Migration rules

- Prefer expand-contract:
  - add new columns or tables first
  - ship compatibility code
  - backfill safely
  - cut over
  - remove old structures later
- Separate schema compatibility from destructive cleanup.
- Do not run destructive migrations without a recovery plan.
- If rollback is not possible, define the roll-forward plan and guard it with extra validation.
- Test migration behavior against realistic data shape when feasible.

## Rollback rules

- Know the last good release before pushing.
- Know whether rollback is application-only, config-only, data-only, or mixed.
- Roll back immediately when:
  - auth is broken
  - data writes are corrupted or blocked
  - payments or core transactions fail
  - error rate or latency spikes materially
  - the blast radius is unclear and growing
- If a migration prevents clean rollback, stop further rollout and execute the documented recovery or roll-forward plan.
- Do not stack another risky deploy on top of a bad one to "fix forward" unless rollback is impossible and the follow-up is clearly safer.

## Production verification

After deploying:

- verify health checks
- verify the main user path
- verify logs and error rate
- verify background jobs or queues if touched
- verify data writes or storage if touched
- verify feature flags or config behavior if used

Verification must come from the changed surface, not just CI status.

## Failure path

If production verification fails:

1. Contain the blast radius.
2. Roll back if rollback is the fastest safe recovery.
3. If rollback is blocked, disable the broken path, reduce traffic, or feature-flag the change.
4. Capture enough evidence to avoid blind repetition.
5. Document what happened, what was rolled back, and what is still risky.

## Release notes discipline

For meaningful changes, record:

- what changed
- what was verified
- migrations or env changes
- rollback target or recovery plan
- known limitations

If the deploy changes how operators recover the system, update the runbook before or immediately after ship.
