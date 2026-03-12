# Senior CTO COO Operator Checklists

## Repo intake

- Confirm workspace path and deployment boundary.
- Inspect git status and identify unrelated local changes.
- Find the actual entrypoints: app startup, tests, CI, deploy config, DB migrations, env loading.
- Find the critical path for the requested task.
- Confirm how success will be verified before editing.

## Implementation

- Reproduce the issue or establish the baseline.
- Read the smallest relevant code surface before editing.
- Identify the real contract being changed.
- Make the smallest strong patch first.
- Keep interfaces explicit and names specific.
- Add or update the proving test.
- Run targeted validation after each meaningful patch.

## Risky change

- Create or update validation artifacts before the risky step.
- Write down the expected blast radius.
- Identify affected data paths, auth paths, jobs, and external dependencies.
- Confirm whether the change is reversible.
- Confirm whether a feature flag, staged rollout, or preview deploy exists.
- Confirm what will trigger rollback.

## Migration

- Use expand-contract for live schemas when possible.
- Make destructive steps separate from compatibility steps.
- Backfill in bounded batches when data volume matters.
- Confirm indexes, constraints, locks, and query impact.
- Verify application compatibility before and after the migration step.
- Record rollback or roll-forward strategy before execution.

## Review

- Check correctness first, then security, then reliability, then maintainability.
- Hunt for hidden state, race conditions, silent failures, unbounded retries, and unsafe defaults.
- Remove dead code and duplicate logic.
- Tighten vague names and undocumented magic values.
- Make sure logs are useful and do not leak secrets.
- Verify tests prove behavior instead of mirroring implementation.

## Deploy

- Build passes.
- Relevant tests pass.
- Smoke or preview validation passes.
- Environment changes are known and documented.
- Rollback target is known.
- Migration plan is compatible or explicitly controlled.
- Observability is ready for the changed path.
- Release note or operator note exists for meaningful behavior changes.

## Incident

- Declare current severity.
- Confirm whether service is still degraded, fully down, or at security risk.
- Capture timestamps, symptoms, and latest known-good version.
- Contain first if blast radius is active.
- Roll back if that is the fastest safe recovery.
- Preserve evidence before cleanup when security or data integrity is involved.
- Verify recovery from the user path, not just internal dashboards.
- Leave a short incident note before moving on.

## Done

- The requested outcome works.
- Validation was actually run and recorded.
- Edge cases or failure states touched by the change were checked.
- Docs, runbooks, or handoff notes were updated if needed.
- Residual risk is named plainly.
- The repo is cleaner or safer than before the change.
