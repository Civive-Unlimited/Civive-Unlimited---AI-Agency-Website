# Meta-Skill: Building Skills the Senior CTO COO Way

Use this file when the task is to create, tighten, or audit another Codex skill.

## Outcome

Build a reusable operator tool, not a prompt dump. A good skill changes behavior reliably, triggers in the right situations, stays lean in context, and gives another Codex instance enough structure to execute without guesswork.

## Skill-building rules

- Start from the real job the skill must perform repeatedly.
- Name the skill in lowercase hyphen-case.
- Keep `SKILL.md` lean and high-signal.
- Split detailed procedures into focused supporting files when the skill needs them.
- Add scripts only when the same fragile logic would otherwise be rewritten repeatedly.
- Do not pad the skill with generic filler, background essays, or user-facing marketing.
- Write the strong version first.
- Make the trigger description specific enough that Codex knows when to use the skill.
- Include hard boundaries, not just encouragement.

## Required structure for `SKILL.md`

Every serious skill should include:

- `Purpose`
- `Use when`
- `Do not use when`
- `Inputs`
- `Rules`
- `Workflow`
- `Outputs`
- `Stop conditions`

If one of these is weak, the skill is weak.

## Skill design process

1. Define the repeatable job.
   - What recurring work should this skill make cheaper, safer, and faster?

2. Define trigger conditions.
   - What user requests should cause the skill to fire?
   - What adjacent requests should not trigger it?

3. Define inputs.
   - What context does Codex need to work safely and correctly?

4. Define hard rules.
   - What must always happen?
   - What must never happen?
   - What requires stop-and-ask behavior?

5. Define the workflow.
   - Put the operating steps in the order the agent should actually follow.
   - Include verification and cleanup, not just execution.

6. Define outputs.
   - What artifacts, decisions, code, reports, or validations should the skill produce?

7. Split detailed content.
   - Keep `SKILL.md` as the navigation and operating contract.
   - Move deployment, security, incident, framework, schema, or tool-specific detail into separate files.

8. Validate for anti-slop.
   - Remove vague lines like "do your best," "consider," or "here are some ideas" unless optionality is truly required.
   - Replace generic nouns with the actual artifact, system, or decision.
   - Replace soft verbs with actions: inspect, reproduce, patch, verify, deploy, rollback, document.

## Skill anti-slop review

- Would another Codex instance know exactly when to use this skill?
- Would it know what to do first?
- Would it know what not to do?
- Would it know how to verify success?
- Would it know when to stop and ask?
- Is there any paragraph that sounds smart but does not change behavior?
- Is there any repeated content that should be a single sharper rule?

If the answer is weak, rewrite.

## When to add extra files

- Add a focused file when the skill needs a reusable playbook, stack guide, runbook, schema reference, or security/deploy policy.
- Do not add random docs because they sound complete.
- Every extra file must either reduce `SKILL.md` bloat or improve operator reliability.

## Scripts and references

- If deterministic behavior matters and the same code will be reused, add a script.
- If the skill needs long technical reference material, keep it in a dedicated file and tell Codex when to read it.
- Avoid deep reference chains. Link directly from `SKILL.md`.

## Validation

Before declaring a skill done:

- Confirm the folder structure is clean.
- Confirm `SKILL.md` frontmatter contains only `name` and `description`.
- Confirm the trigger description is strong.
- Confirm all referenced files exist.
- Confirm the workflow is actionable.
- Confirm the stop conditions are real.
- Confirm the skill is reusable without hidden chat context.
