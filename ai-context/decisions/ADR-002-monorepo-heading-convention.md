# ADR-002: Support monorepo-style project headings in inbox.md

## Status
Active

## Context
Five ideas logged in `inbox.md` (inflation-index, job-application-pipeline, linkedin-automation, secondhand-phone-finder, new-phone-price-finder) all need web scraping as shared infrastructure. Rather than building separate scraping code per idea, they now share one repo: `scraper-platform` (github.com/nikhilpatil336/scraper-platform), each as its own subfolder under `apps/`. This breaks the original one-repo-per-idea assumption baked into the heading format and the overnight routine.

## What was decided
- Heading format extended: `## <project-name> — repo: <git URL> (apps/<project-name>)` — the parenthetical path is only used when a project shares a repo with others.
- When the overnight routine implements one of these ideas, it clones the shared repo but scopes all changes to that one subfolder — doesn't touch other apps/packages in the same repo, and the PR only contains that subfolder's diff.
- Plain `repo: <git URL>` (no path) still means "this project has its own dedicated repo" — unchanged for ideas that don't share infrastructure (e.g. `community-tracker`, `trek-website`).
- This is documented in `RULES.md` directly (not just here) since the overnight routine reads `RULES.md` every run, not `ai-context/`.

## Why not keep every idea on a fully separate repo
Would mean re-implementing/duplicating scraper session handling, rate-limiting, and LLM extraction logic five times, or publishing `scraper-platform` as a versioned package each dependent repo installs — more overhead than one repo split by folder for a solo builder. See `scraper-platform`'s own `ai-context/decisions/ADR-001-stack-and-repo-topology.md` for the full reasoning.
