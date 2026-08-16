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

---

## Next tasks
- [ ] Decide whether to update `templates/context-hierarchy/` (all 4 types) to V5 parity (`architect.md` agent + `ai-context/review-triage.md` + CLAUDE.md wiring) — still open, not decided. See `ai-context/decisions/ADR-001-scope-v5-template-additions-to-root.md` (covers root only, explicitly does not cover this).

---

## Completed
- [x] Logged real ideas into `inbox.md`, removed the `example-project` placeholder heading (2026-08-16) — 7 ideas logged: `community-tracker`, `inflation-index`, `job-application-pipeline`, `linkedin-automation`, `trek-website`, `secondhand-phone-finder`, `new-phone-price-finder`. Declined logging one idea (scraping matrimony-site profiles for phone numbers) as a privacy/consent violation.
- [x] Spun off `scraper-platform` (2026-08-16) — private repo, `github.com/nikhilpatil336/scraper-platform`, sibling folder `D:\Projects\ideas-inbox-projects\`, as the shared scraper base for 5 of the logged ideas (inflation-index, job-application-pipeline, linkedin-automation, secondhand-phone-finder, new-phone-price-finder). Those `inbox.md` headings updated to point at it with `apps/<name>` subfolder paths; `RULES.md` documents the new monorepo heading convention (see `ai-context/decisions/ADR-002-monorepo-heading-convention.md`). `scraper-platform` has its own TYPE-C context hierarchy and tracks its own implementation progress in its own `ai-context/tasks.md` from here on.
- [x] Ideas-inbox repo created + pushed to GitHub (public, `nikhilpatil336/ideas-inbox`)
- [x] Overnight cloud routine created — trigger `trig_01X9KW3JB5ZKsRC2yXQ7mbrB`, cron `30 18 * * 3` UTC (Thu 00:00 IST), model claude-sonnet-5, console: https://claude.ai/code/routines/trig_01X9KW3JB5ZKsRC2yXQ7mbrB
- [x] `RULES.md` written as source of truth for logging format + routine behavior + engineering principles for the cloud agent
- [x] Context-hierarchy template extracted, updated (added multi-session file-claim coordination), versioned into `templates/context-hierarchy/`
- [x] Repo relocated `C:\Users\nikhi\ideas-inbox` → `D:\Projects\ideas-inbox` (2026-07-26, off C: drive)
- [x] TYPE-A single-project context-hierarchy template applied to this repo's own root (2026-07-26) — this file, `CLAUDE.md`, `sessions/active-work.md` etc. replace memory as the project-state tracker per user's explicit instruction
- [x] Compared root context hierarchy against `D:\Projects\_templates\AI Structure V5` (2026-08-16) — confirmed root was pre-V5, cherry-picked only the "keep files small" warning into `ai-context/decisions/INDEX.md` (rest of V5 doesn't map to a markdown-only repo). See `ai-context/decisions/ADR-001-scope-v5-template-additions-to-root.md`.
