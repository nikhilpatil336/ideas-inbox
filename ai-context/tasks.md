# Tasks

## Current task
> Raspberry Pi (`kp@unitpi`) — fix ngrok domain changing on restart, breaking Chartink webhook alerts

---

## In progress
- [ ] Decide + implement fix for ngrok domain instability (Raspberry Pi / Chartink)
  - State: researched root cause + fix, discussion paused awaiting user decision. See `sessions/2026-07-27-raspi-ngrok-chartink.md` for full context.
  - Not yet logged to `inbox.md` — still deciding exact scope with user.
- [ ] Overnight leftover-quota automation: masterclass video notes (`D:\Learnings\fabio valentini masterclass`) run unattended on the Raspberry Pi (`kp@unitpi`), resource-capped so the live trading app never gets starved
  - State: design agreed (Docker container, hard memory/CPU caps, market-hours time guard, stateless `claude -p` loop per video, local-only git for review, Tue→Thu ramp pacing), nothing built yet. See `sessions/2026-08-06-overnight-quota-automation.md` for full context.
  - Open before implementing: what the user's usage-bar hook actually measures (weekly quota % vs. session context %), Syncthing vs. pull-script for Pi↔laptop sync, Termius walkthrough owed to user.
  - Not yet logged to `inbox.md` — still at design stage, not a scoped implementable slice.

- [ ] Plan IPO listing-day exit bot (mainboard + SME, trailing SL)
  - [x] Initial assessment (2026-11-03)
  - [x] User answered 4 blockers (2026-11-04): Angel One; below issue price → sell immediately; hold for days until stop hit (no day cap); host on Pi inside existing `local_to_smartapi` app (ADR-003)
  - [x] Explored `local_to_smartapi`, checked 15:00 square-off (only touches `OrderRegistry` contexts), committed its pending work as `67501a0` on `feature/claude-code-changes` (NOT pushed)
  - [ ] Awaiting user approval of design + price-filter fix + BSE resubscribe fix, plus X/Y % values and manual-entry-v1 OK. Then build in a git worktree, show diff before merge.
  - Full state: `sessions/2026-11-05-ipo-exit-bot-design.md` (supersedes open questions in `sessions/2026-11-03-ipo-listing-exit-bot.md`).

---

## Next tasks
- [ ] Resolve blockers on `[~]` ideas in `inbox.md` (8 items): grant Claude GitHub App access to private `scraper-platform` (unblocks 5 ideas), create a git repo for `fahrschule-sim` (unblocks 3), then flip to `[ ]`. Also give scope input on the 5 pending `[ ]` ideas (community-tracker, trek-website, book-reading-pipeline, own-game, clothing-store-management) — they will likely go `[~]` otherwise.
- [ ] Vet skill repos before installing any (READMEs/code not read yet). Mapping: `inbox.md` `Skills:` lines + memory `skills-library-mapping.md`. khoj is AGPL-3.0.
- [ ] Fix `/c/Users/nikhi/.config/watch/.env` permissions (644 → 600), flagged by session-start hook, not acted on.
- [ ] Decide whether to update `templates/context-hierarchy/` (all 4 types) to V5 parity (`architect.md` agent + `ai-context/review-triage.md` + CLAUDE.md wiring) — still open, not decided. See `ai-context/decisions/ADR-001-scope-v5-template-additions-to-root.md` (covers root only, explicitly does not cover this).

---

## Completed
- [x] Logged 15 skill repos + 3 new ideas (2026-11-01) — `Skills:` lines under 6 existing headings, new headings `book-reading-pipeline`, `own-game`, `clothing-store-management`, plus `## general-skills` and `## Skill repo URLs`; one reference-note line added to `RULES.md`; memory pointer saved. Commit `a094b88` pushed to `origin/main` (direct to main, not a PR — inbox logging only).
- [x] Logged real ideas into `inbox.md`, removed the `example-project` placeholder heading (2026-08-16) — 7 ideas logged: `community-tracker`, `inflation-index`, `job-application-pipeline`, `linkedin-automation`, `trek-website`, `secondhand-phone-finder`, `new-phone-price-finder`. Declined logging one idea (scraping matrimony-site profiles for phone numbers) as a privacy/consent violation.
- [x] Spun off `scraper-platform` (2026-08-16) — private repo, `github.com/nikhilpatil336/scraper-platform`, sibling folder `D:\Projects\ideas-inbox-projects\`, as the shared scraper base for 5 of the logged ideas (inflation-index, job-application-pipeline, linkedin-automation, secondhand-phone-finder, new-phone-price-finder). Those `inbox.md` headings updated to point at it with `apps/<name>` subfolder paths; `RULES.md` documents the new monorepo heading convention (see `ai-context/decisions/ADR-002-monorepo-heading-convention.md`). `scraper-platform` has its own TYPE-C context hierarchy and tracks its own implementation progress in its own `ai-context/tasks.md` from here on.
- [x] Ideas-inbox repo created + pushed to GitHub (public, `nikhilpatil336/ideas-inbox`)
- [x] Overnight cloud routine created — trigger `trig_01X9KW3JB5ZKsRC2yXQ7mbrB`, cron `30 18 * * 3` UTC (Thu 00:00 IST), model claude-sonnet-5, console: https://claude.ai/code/routines/trig_01X9KW3JB5ZKsRC2yXQ7mbrB
- [x] `RULES.md` written as source of truth for logging format + routine behavior + engineering principles for the cloud agent
- [x] Context-hierarchy template extracted, updated (added multi-session file-claim coordination), versioned into `templates/context-hierarchy/`
- [x] Repo relocated `C:\Users\nikhi\ideas-inbox` → `D:\Projects\ideas-inbox` (2026-07-26, off C: drive)
- [x] TYPE-A single-project context-hierarchy template applied to this repo's own root (2026-07-26) — this file, `CLAUDE.md`, `sessions/active-work.md` etc. replace memory as the project-state tracker per user's explicit instruction
- [x] Compared root context hierarchy against `D:\Projects\_templates\AI Structure V5` (2026-08-16) — confirmed root was pre-V5, cherry-picked only the "keep files small" warning into `ai-context/decisions/INDEX.md` (rest of V5 doesn't map to a markdown-only repo). See `ai-context/decisions/ADR-001-scope-v5-template-additions-to-root.md`.
