# Ideas Inbox System — Rules

Single source of truth for how this system works. Read this before logging an idea or touching the overnight routine. The overnight cloud agent reads this file every run before implementing anything.

## Purpose

Capture ideas the moment they come up so none get lost, then execute them autonomously overnight (using leftover weekly Claude quota) as reviewable PRs — never as silent auto-merges.

## Logging ideas

- `inbox.md` is one permanent file — the full history of every idea ever logged, across every project. Nothing is ever moved out or deleted; done and blocked ideas stay in place, just marked. This is deliberate: it doubles as the complete idea log.
- Structure: one `## <project-name> — repo: <git URL>` heading per project, with `- [ ]` idea lines underneath.
- New project → add a new heading. New idea → add a line under the right heading.
- Any idea worth keeping — from any conversation, any project — gets appended immediately. Don't wait to "batch" ideas locally; the overnight routine only sees what's pushed. Commit and push right after adding.
- If the target repo isn't known yet, use the heading `## <project-name> — repo: TBD` and fill in the URL later. Log first, refine later — never skip logging because details are incomplete.

**Status markers** (used on the `- [ ]` lines):
- `[ ]` — not yet attempted
- `[x]` — done, PR opened (PR URL appended to the line)
- `[~]` — attempted, blocked on the user's input (a note is appended explaining exactly what's needed). The routine skips `[~]` items on future runs; the user resolves the note and flips it back to `[ ]` to get it picked up again.

## The overnight routine

- Trigger: `trig_01X9KW3JB5ZKsRC2yXQ7mbrB` (RemoteTrigger), console: https://claude.ai/code/routines/trig_01X9KW3JB5ZKsRC2yXQ7mbrB
- Schedule: Wednesdays 18:30 UTC = Thursdays 00:00 Asia/Calcutta, weekly (runs on leftover quota before Thursday's reset)
- Model: claude-sonnet-5
- Currently a single sequential cloud session per run (not parallel instances per project) — it clones this repo, reads `RULES.md` and `inbox.md` once, then walks every `[ ]` item top to bottom. Revisit this only if the idea backlog outgrows what one run can get through.
- Per idea: clone the target repo, implement, commit, push a branch, open a PR. **Never merge. Never push to main/master directly** — every change lands as a PR for manual review, no exceptions, regardless of how confident the agent is.
- After opening a PR, mark the line `[x]` in `inbox.md` and append the PR URL.
- **If an idea needs a decision or approval only the user can make** (ambiguous requirements, secrets/credentials, irreversible actions, conflicting valid approaches) — do not guess, and do not block the rest of the run. Mark the line `[~]`, append a note explaining precisely what input is needed, and move on to the next idea.
- If an idea is merely difficult but resolvable with reasonable engineering judgment (not a real ambiguity), implement your best interpretation, note any assumptions made in the PR description, and mark `[x]` — don't mark `[~]` just because something was hard.
- Once all `[ ]` items are processed (or turned into `[~]`), commit and push the updated `inbox.md` back to this repo in a single commit for the run.

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

## Context hierarchy template

Every project (existing or new) should get a context hierarchy applied so Claude has consistent, structured project memory instead of starting cold each session. The canonical, versioned copy lives in this repo at `templates/context-hierarchy/`.

- One-time machine setup: copy `templates/context-hierarchy/0_MACHINE-LEVEL (copy to C-Users-nikhi)/.claude/` into `C:\Users\nikhi\.claude\` (merge `settings.json` by hand if it already exists — don't overwrite).
- Per project: pick the matching type and copy its contents into the project root:
  - `1_TYPE-A_single-project` — one codebase, any language
  - `2_TYPE-B_conversion-project` — converting one language/stack to another
  - `3_TYPE-C_monorepo` — multiple services, all present locally
  - `4_TYPE-D_microservices` — multiple services, not all present locally
- Fill in the project name/description at the top of `CLAUDE.md`, then run the bootstrap prompts in `PROMPTS-bootstrap.md` once to fill in `ai-context/`.
- Full instructions: `templates/context-hierarchy/START-HERE.md`.

**Multi-session file coordination.** If more than one Claude Code session runs on the same project at once, they can silently overwrite each other's edits — there's no built-in live channel between independently-launched sessions. The template solves this with a claim file, `sessions/active-work.md`, in every project: before writing to a file, a session checks that file, claims what it's about to touch if unclaimed, and stops to ask the user if another active session already holds a conflicting claim. Claims are released during `/wrap-up`. This is a convention enforced by each project's `CLAUDE.md` and `PROMPT-session-start.md`/`wrap-up` command, not a platform feature — it depends on every session actually reading its `CLAUDE.md`.

## Where things live

- This repo: https://github.com/nikhilpatil336/ideas-inbox (local clone: `C:\Users\nikhi\ideas-inbox`)
- Idea log: `inbox.md`
- Rules (this file): `RULES.md`
- Context hierarchy template: `templates/context-hierarchy/`
