# Ideas Inbox System — Rules

Single source of truth for how this system works. Read this before logging an idea or touching the overnight routine. The overnight cloud agent reads this file every run before implementing anything.

## Purpose

Capture ideas the moment they come up so none get lost, then execute them autonomously overnight (using leftover weekly Claude quota) as reviewable PRs — never as silent auto-merges.

## Logging ideas

- Any idea worth keeping — from any conversation, any project — gets appended to `inbox.md` in this repo immediately. Don't wait to "batch" ideas locally; the overnight routine only sees what's pushed.
- Format: `- [ ] <description> — repo: <target repo URL>`
- If the target repo isn't known yet, log with `repo: TBD` anyway and fill it in later. Log first, refine later — never skip logging because details are incomplete.
- Commit and push right after adding an item.

## The overnight routine

- Trigger: `trig_01X9KW3JB5ZKsRC2yXQ7mbrB` (RemoteTrigger), console: https://claude.ai/code/routines/trig_01X9KW3JB5ZKsRC2yXQ7mbrB
- Schedule: Wednesdays 18:30 UTC = Thursdays 00:00 Asia/Calcutta, weekly (runs on leftover quota before Thursday's reset)
- Model: claude-sonnet-5
- Per run: clone this repo, read `RULES.md` (this file) and `inbox.md`. For each unchecked item, clone the target repo, implement, commit, push a branch, open a PR. **Never merge. Never push to main/master directly** — every change lands as a PR for manual review, no exceptions, regardless of how confident the agent is.
- After opening a PR, check off the item in `inbox.md` and append the PR URL, then push that back to this repo.
- If an idea can't be fully implemented (too vague, blocked, out of reach), still open a best-effort PR or draft, check off the item, and state the limitation plainly in both the PR and `inbox.md` — never leave it silently unchecked.

## Engineering principles for implementing ideas

These apply to every repo the routine touches:

1. **Smallest diff that fully realizes the idea.** No drive-by refactors, no unrelated cleanup riding along.
2. **Every change goes through a human-reviewed PR.** No direct pushes to main, no auto-merge, regardless of confidence.
3. **Verify before claiming done.** If the repo has a build/lint/test setup, run it in the sandbox before opening the PR, and say in the PR description what was and wasn't actually verified — don't claim untested work as working.
4. **Boring, readable code over clever code.** Optimize for a human reviewer skimming the diff quickly.
5. **Match the target repo's existing conventions** rather than imposing new patterns or abstractions.
6. **Be honest about uncertainty.** If the idea is ambiguous or only partially achievable, say so explicitly in the PR — don't silently guess or overclaim completeness.
7. **Commit messages and PR descriptions explain why, not what.** The diff already shows what changed.
8. **No speculative scope.** Implement exactly what the idea describes — no unrequested features, no hypothetical future-proofing.

## Where things live

- This repo: https://github.com/nikhilpatil336/ideas-inbox (local clone: `C:\Users\nikhi\ideas-inbox`)
- Idea log: `inbox.md`
- Rules (this file): `RULES.md`
