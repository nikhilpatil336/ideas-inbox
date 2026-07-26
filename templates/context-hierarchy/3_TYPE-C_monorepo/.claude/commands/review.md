Review all changes since last commit.

STEP 1 — Run: git diff HEAD
Pass the changed files to the reviewer agent:
"reviewer: check these changed files against our decisions and patterns"

STEP 2 — Show the reviewer's output exactly as returned.

STEP 3 — If verdict is "needs fixes":
Show each fix as a diff. Ask: "Apply? yes / no"

STEP 4 — If verdict is "ready to commit":
Suggest commit message: type(scope): description
Ask: "Commit with this message? yes / edit"
