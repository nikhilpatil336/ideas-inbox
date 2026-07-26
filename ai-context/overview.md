# Project overview

## Summary
Personal system to stop losing weekly Claude subscription quota. Ideas get logged to `inbox.md` the moment they come up, in any project/conversation. A weekly scheduled cloud agent (RemoteTrigger) fires overnight before the Thursday quota reset, walks the pending ideas top to bottom, and implements each as a reviewable PR in its target repo — never auto-merging.

## Tech stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Idea log | Markdown (`inbox.md`) | — |
| Automation | Claude Code cloud RemoteTrigger (scheduled routine) | — |

No app code, no build/test/lint — this repo is the control plane, not a codebase.

## Key features
1. `inbox.md` — permanent, never-pruned idea log grouped by project heading with `[ ]`/`[x]`/`[~]` status markers.
2. `RULES.md` — source of truth the overnight cloud agent reads every run before touching anything.
3. `templates/context-hierarchy/` — versioned kit (this same CLAUDE.md/ai-context/sessions structure) for bootstrapping other projects.

## Roles & access
Single user (nikhilpatil336). GitHub repo is public but only the owner logs ideas / adjusts the routine.

## Local dev setup
```bash
# prerequisites: git
# steps: git clone https://github.com/nikhilpatil336/ideas-inbox D:\Projects\ideas-inbox
```

## Key commands
```bash
# run:   n/a — edit inbox.md, commit, push
# build: n/a
# check: n/a
```
