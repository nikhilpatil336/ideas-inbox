# Decisions index
<!-- Each decision gets its own file: ADR-001-title.md -->
<!-- Claude reads only the relevant ADR, not all of them -->

## Active decisions

| ADR | Topic | Status | File |
|-----|-------|--------|------|
| 001 | Scope which V5 template additions apply to ideas-inbox root | active | ADR-001-scope-v5-template-additions-to-root.md |
| 002 | Support monorepo-style project headings in inbox.md | active | ADR-002-monorepo-heading-convention.md |
| 003 | Build IPO exit bot inside local_to_smartapi, isolated from intraday flow | active | ADR-003-ipo-bot-inside-local-to-smartapi.md |

## Archived (superseded)
<!-- Moved here when a decision is reversed -->

## How to add a new decision
Claude adds a new row here + creates ADR-NNN-title.md
whenever a non-obvious technical decision is made.

## Keep files small — do not let one ADR become a running log
A real project on an earlier version of this template let one ADR file absorb
50+ session write-ups over 3 weeks — it grew to ~65k tokens and every review
agent had to read the whole thing on every dispatch. If an ADR's "What was
decided" no longer fits in a sentence, or a file already covers more than one
topic, split it into a new ADR file immediately, not later.
