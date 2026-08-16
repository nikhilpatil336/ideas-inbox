# 2026-08-16 — Ideas logged + scraper-platform spun off

## Done today
- User brought 9 side-project ideas in one dump; categorized each by whether it needs a crawler/scraper and by complexity/effort/risk, with workarounds for each (e.g. official APIs instead of scraping where available, RSS feeds instead of scraping for Kleinanzeigen, human-in-the-loop instead of full auto-apply for the job pipeline).
- Declined to help build one idea: scraping matrimony-site profiles for phone numbers — privacy/consent violation, not logged anywhere.
- Logged 7 ideas to `inbox.md`, removed the stale `example-project` placeholder heading (resolved a merge conflict against the overnight routine's earlier `[~]` marking of that same placeholder — took the deletion, which is what the routine's own note suggested).
- Background research fork confirmed a crawler/scraper tool shortlist (Firecrawl, Crawlee, Playwright, official APIs for Amazon/Flipkart) — folded into the planning discussion, not saved separately.
- Decided to build a shared scraper base (`scraper-platform`) for 5 of the 7 logged ideas rather than duplicating scraping infra per idea.
- Worked through and decided: Python backend + React/TS frontend, monorepo topology (not separate repos per idea), separate repo location (not nested inside `ideas-inbox`), separate context hierarchy (TYPE-C), private GitHub visibility, direct-to-main branching for manual work (PR-per-idea still applies to the *automated* routine).
- Installed GitHub CLI (`winget install GitHub.cli`), authenticated as `nikhilpatil336`.
- Created `scraper-platform` (private repo, `github.com/nikhilpatil336/scraper-platform`) at `D:\Projects\ideas-inbox-projects\scraper-platform`, pushed initial commit.
- Updated the 5 relevant `inbox.md` headings to `repo: <scraper-platform-url> (apps/<name>)`, documented the new monorepo heading convention in `RULES.md`.
- Scaffolded `scraper-platform`'s own TYPE-C context hierarchy (`CLAUDE.md`, `ai-context/*` including `ADR-001-stack-and-repo-topology.md`, `.claude/agents`, `.claude/commands`, `sessions/`) and the `packages/core`, `packages/adapters/{linkedin,naukri,kleinanzeigen,amazon,flipkart}`, `apps/{inflation-index,job-application-pipeline,linkedin-automation,secondhand-phone-finder,new-phone-price-finder}` folder skeleton — all placeholders, no implementation code yet.

## Decisions made
- See `ai-context/decisions/ADR-002-monorepo-heading-convention.md` (this repo) for the `inbox.md`/`RULES.md` side.
- See `scraper-platform/ai-context/decisions/ADR-001-stack-and-repo-topology.md` for the stack/repo/topology decisions (Python, monorepo, private, separate context hierarchy, branching model).

## Patterns found
- Added a reusable process pattern to `ai-context/patterns.md`: how to spin off a shared-base project from multiple `inbox.md` ideas (separate repo → monorepo by folder → `(path)` heading suffix → document in `RULES.md`).
- Added a lesson learned: claim `sessions/active-work.md` *before* the first edit each session, not after — this session skipped it (no collision happened, but that was luck, not process).

## Where we stopped
`scraper-platform` skeleton is fully scaffolded and pushed. No implementation code exists yet anywhere in it.

## Next step
Start on `scraper-platform/packages/core` (browser session mgmt, fetch, LLM extraction, storage, rate-limiting) in a new session — see `scraper-platform/ai-context/tasks.md` and its `PROMPT-session-start.md`. Recommended first app to prove `packages/core` against: `apps/secondhand-phone-finder` or `apps/new-phone-price-finder` (lowest complexity/risk of the five).
