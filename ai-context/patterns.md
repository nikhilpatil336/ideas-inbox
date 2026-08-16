# Patterns
<!-- Claude appends here when a repeatable pattern is identified -->
<!-- This grows over time and prevents Claude repeating mistakes -->

## Code patterns

### [Pattern name]
When: [situation where this applies]
Do this:
```
[code example]
```
Not this:
```
[wrong example]
```

---

## Process patterns

### Spinning off a shared-base project from multiple inbox ideas
When: several `inbox.md` ideas need the same kind of infrastructure (e.g. multiple ideas all need a web scraper) and duplicating it per-idea would be wasteful.
Do this:
1. Create a new, separate repo for the shared base (own git history, own context hierarchy — don't nest it inside `ideas-inbox` itself, which is deliberately markdown-only).
2. Structure it as a monorepo: shared code in one place, each dependent idea as its own subfolder (e.g. `apps/<name>`).
3. Update each affected `inbox.md` heading to `repo: <shared-repo-url> (apps/<name>)` — see ADR-002.
4. Document the `(path)` convention in `RULES.md` itself, since that's what the overnight routine reads every run — not just in `ai-context/`.
Not this: giving each idea its own repo and either duplicating the shared code, or publishing it as a versioned package every dependent repo installs — more overhead than one repo split by folder, for a solo builder.

---

## Lessons learned
<!-- Things that went wrong and how they were fixed -->
<!-- Prevents Claude making the same mistake twice -->

- [YYYY-MM-DD] [What went wrong] → [What the fix was]
- [2026-08-16] When evaluating whether to pull an addition from a generic/broader template (e.g. `D:\Projects\_templates\AI Structure V5`) into a specific project, filter each item by whether it maps to that project's *actual* risk surface (code vs. markdown, concurrency vs. none) and whether it's always-loaded or on-demand — not by "the newer template has it." → Cherry-pick per-item value/token-cost, don't copy a template version wholesale. See `ai-context/decisions/ADR-001-scope-v5-template-additions-to-root.md`.
- [2026-08-16] Edited `inbox.md` and `RULES.md` directly without adding a claim row to `sessions/active-work.md` first, despite `CLAUDE.md` requiring it before the first write each session. → No collision happened this time (no other session was active), but the protocol exists precisely so that's not a matter of luck. Add the claim row *before* the first edit, not as an afterthought — even solo, even when confident no other session is running.
