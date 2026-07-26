# Active work — session claims

Read this BEFORE editing any file, every session. Prevents two Claude Code
sessions running on this project at once from silently overwriting each
other's work.

## Protocol
1. Before writing to a file for the first time this session, check the table below.
2. If none of your target files appear in an `active` row, add a new row claiming
   them, then proceed as normal (diff → approval → write). Pick a short, readable
   session label (e.g. `bugfix-auth`, `tab2-feature-x`) — not a random ID.
3. If a target file DOES appear in an `active` row from a different session — STOP.
   Do not edit it. Tell the user: "`<file>` is already claimed by `<session label>`
   working on `<task>` (started `<time>`). Wait for it to release, or tell me how
   you want to proceed."
4. At the end of the session (`/wrap-up`), mark your row(s) `released` — don't
   delete them, so there's a record of who touched what recently.
5. A row still `active` after several hours with no session working on it is
   probably stale (a session crashed or skipped `/wrap-up`) — confirm with the
   user before treating the claim as free.

## Claims

| Session label | Files / area claimed | Task | Started | Status |
|---|---|---|---|---|
