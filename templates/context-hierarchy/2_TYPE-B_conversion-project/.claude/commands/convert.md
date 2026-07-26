Convert this class: $ARGUMENTS

STEP 1 — Check dependencies first.
Read @ai-context/conversion-progress.md.
Are all classes this one depends on already converted?
If NOT: warn "⚠ [ClassName] depends on [X] which is not converted yet. Proceed anyway? yes / no"

STEP 2 — Use explorer agent to read the source class.
"explorer: read [source class path] and summarize:
 - what it does
 - all methods and their logic
 - what other classes it depends on
 - any framework magic that needs manual handling in target language"

STEP 3 — State the type mapping decisions.
For each source pattern in this class, say which target equivalent you will use.
If any mapping is non-obvious, ask me before proceeding.

STEP 4 — Show the target code as a diff BEFORE writing.
```
FILE: target-project/src/[path]/[filename]
SOURCE: source-project/src/[path]/[ClassName]

+ [full target code]
```
Ask: "Write this file? yes / no / change something"

STEP 5 — After approval: write the file.
Run: cargo check (or equivalent for target language)
If errors: use debugger agent to find root cause.

STEP 6 — Update @ai-context/conversion-progress.md.
Mark this class [x].
Add any new type mapping decisions to the mapping section.

STEP 7 — Print:
• What this class does
• Key mapping decisions made
• Which class to convert next (dependency order — leaves first)
• Tab 1 or Tab 2 for next class
