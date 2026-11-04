# Ideas Inbox

Permanent, full history of every idea logged — across all projects. Nothing here ever gets moved or deleted; done and blocked ideas stay in place so you can always scroll back and see everything you've ever logged.

**Status markers**
- `[ ]` — not yet attempted
- `[x]` — done, PR opened (link appended to the line)
- `[~]` — attempted, blocked on your input (a note is appended explaining exactly what's needed). The overnight routine skips `[~]` items on future runs — once you resolve the question, edit the line back to `[ ]` so it gets picked up again.

**Adding an idea**
- New project → add a new `## <project-name> — repo: <git URL>` heading.
- New idea → add a `- [ ]` line under the right heading.

---

**Repo-access note (2026-08-19):** the overnight agent's GitHub connection currently has no access to the private repo `nikhilpatil336/scraper-platform` — `add_repo`/`list_repos` both fail to find it. Every idea below pointing at that repo is blocked on this until access is granted (claude.ai Settings → Connectors, or wherever this account's Claude GitHub App repo access is configured), independent of any other blocker noted on the line itself.

## community-tracker — repo: TBD
Skills: last30days-skill (Reddit/X/YouTube/HN research), khoj (scheduled automations)
- [ ] Join Vaibhav Sisinty community, keep tabs on activity, flag/add anything useful. Needs a scope decision: which platform (Skool/Discord/etc.), what "keep tabs" means technically (poll + summarize? notify on keywords?).

## inflation-index — repo: https://github.com/nikhilpatil336/scraper-platform (apps/inflation-index)
- [~] Build a personal inflation index: pull real inflation data per item/category, let user pick which items apply to them and assign weightage per item, show a pie chart of the weighted breakdown, with user accounts to save selections. Needs data-source decision (which inflation data source(s) to scrape/use) before implementing. **Blocked (2026-08-19):** which inflation data source(s) to use — no source specified, and options (govt CPI APIs vs. scraping third-party sites) have different reliability/legal tradeoffs. Also: this repo (`scraper-platform`) is currently inaccessible to the overnight agent's GitHub connection (see repo-access note on the headings below) — needs to be resolved regardless of the data-source decision.

## job-application-pipeline — repo: https://github.com/nikhilpatil336/scraper-platform (apps/job-application-pipeline)
Skills: ai-job-search (evaluates postings, tailors CVs, writes cover letters, runs locally)
- [~] Crawl job boards (LinkedIn, Naukri, Instahyre, Indeed, plus international equivalents) for openings, use an LLM to tailor resume per posting, auto-submit applications. Must support jobs outside India (currency/visa/resume-format variance). High risk/complexity: LinkedIn/Naukri/Indeed actively block scraping and ToS-ban automated accounts — needs an explicit user decision on acceptable risk (proxies/anti-bot evasion vs. official APIs where available) before implementation. **Blocked (2026-08-19):** acceptable-risk decision (scrape with anti-bot evasion vs. official APIs only, which limits coverage) not yet made — not attempted. Also blocked on `scraper-platform` repo access (see repo-access note below).

## linkedin-automation — repo: https://github.com/nikhilpatil336/scraper-platform (apps/linkedin-automation)
Skills: marketingskills (copywriting for outreach and comments only)
- [~] Automate LinkedIn: send connection requests, post comments, and later request referrals from the resulting network. Violates LinkedIn's ToS (automation is explicitly disallowed) — real risk of account restriction/ban. Needs user go-ahead on that risk before implementing. **Blocked (2026-08-19):** explicit go-ahead on ToS/ban risk not given — not attempted. Also blocked on `scraper-platform` repo access (see repo-access note below).

## trek-website — repo: TBD
Skills: marketingskills (CRO, SEO, copy), ai-website-cloner-template (layout reference only)
- [ ] Build a marketing/booking website for a friend's trekking business, to help him attract more customers for his treks. Needs basic scope input: number of pages, whether booking/payment is required, branding assets.

## secondhand-phone-finder — repo: https://github.com/nikhilpatil336/scraper-platform (apps/secondhand-phone-finder)
- [~] Scrape Kleinanzeigen for 2nd-hand mobile phone listings and surface the best-value options (price vs. condition/specs). **Blocked (2026-08-19):** this idea itself has no open ambiguity — the overnight agent's GitHub connection has no access to the private `scraper-platform` repo (`add_repo`/`list_repos` don't see it), so it can't be cloned or pushed to. Needs: grant the Claude GitHub App access to `nikhilpatil336/scraper-platform` (claude.ai Settings → Connectors, or org/repo access settings), then flip back to `[ ]`.

## new-phone-price-finder — repo: https://github.com/nikhilpatil336/scraper-platform (apps/new-phone-price-finder)
- [~] Compare new mobile phone prices on Flipkart and Amazon India to find the lowest price for a given model — prefer official affiliate APIs (Amazon PA-API, Flipkart Affiliate API) over raw scraping where available. **Blocked (2026-08-19):** two things — (1) no Amazon PA-API / Flipkart Affiliate API credentials available to the agent, and falling back to raw scraping of Amazon/Flipkart carries the same ToS/anti-bot risk flagged on `job-application-pipeline`, so which approach to take needs a decision; (2) the overnight agent's GitHub connection has no access to the private `scraper-platform` repo regardless (see repo-access note below).

## fahrschule-sim — repo: TBD
Built and working (local: `D:\Projects\ideas-inbox-projects\fahrschule-sim`): first-person pixel driving simulator teaching German StVO rules, for my brother's driving test. Details in that folder's `ai-context/`.
Skills: Claude-Code-Game-Studios
- [~] Parking task (Einparken): parallel parking and reversing into a bay, scored like the practical test. Blocked: project has no git repo yet. Create one, fill in the heading URL, then flip to `[ ]`.
- [~] Night and fog driving: practise lights rules (dipped/main beam, fog lights, 50 km/h at < 50 m visibility). Blocked: no git repo yet (same as above).
- [~] German-language toggle for all UI, lesson and rule texts. Blocked: no git repo yet (same as above).

## book-reading-pipeline — repo: TBD
Skills: book-to-skill, obsidian-skills, khoj
- [ ] Book reading pipeline: ingest books (PDF), produce summaries/notes, feed them into a reusable library (Claude skills and/or Obsidian vault). Needs scope decision: skill-per-book vs. notes vault vs. reading tracker.

## own-game — repo: TBD
Skills: Claude-Code-Game-Studios, mcp-for-blender (only if 3D)
- [ ] Build my own game. Needs scope decision: genre, 2D vs 3D, engine, target platform.

## clothing-store-management — repo: TBD
Skills: marketingskills, ai-website-cloner-template (layout reference only), next-ai-draw-io
- [ ] Clothing store management website: inventory, orders, customers, storefront. Needs scope input: single shop vs. multi-vendor, online payments, India-specific tax/GST.

## ipo-listing-exit-bot — repo: https://github.com/nikhilpatil336/SmartAPI_ChartInk_Trading (new `ipo/` package)
- [~] Auto-sell allotted mainboard + SME IPO shares: at 10:00 on listing day sell immediately if below issue price, else place an exchange-side SL and trail it up; hold across days (re-place SL each morning) until the stop is hit. Angel One, runs on the Pi inside the existing `local_to_smartapi` app. **Blocked (2026-11-05):** design + two shared-code fixes (price-filter freeze, BSE resubscribe) awaiting user approval in an interactive session. Real money — do NOT implement overnight. Full state: `sessions/2026-11-05-ipo-exit-bot-design.md` (local only).

## general-skills — repo: n/a (reference list, not implementable)
- ECC (https://github.com/affaan-m/ECC) — Claude Code harness optimization: skills, memory, security
- claude-howto (https://github.com/luongnv89/claude-howto), claude-code-best-practice (https://github.com/shanraisshan/claude-code-best-practice) — Claude Code learning references
- knowledge-work-plugins (https://github.com/anthropics/knowledge-work-plugins) — Cowork plugins for knowledge work
- next-ai-draw-io (https://github.com/DayuanJiang/next-ai-draw-io) — draw.io diagrams via chat or MCP
- watermarks-remover (https://github.com/guillaumemeyer/watermarks-remover) — strips AI watermarks; use on own content only

## Skill repo URLs (referenced by `Skills:` lines above)
- last30days-skill — https://github.com/mvanhorn/last30days-skill
- khoj — https://github.com/khoj-ai/khoj (AGPL-3.0)
- ai-job-search — https://github.com/ai-job-search-dev/ai-job-search
- marketingskills — https://github.com/coreyhaines31/marketingskills
- ai-website-cloner-template — https://github.com/JCodesMore/ai-website-cloner-template
- Claude-Code-Game-Studios — https://github.com/Donchitos/Claude-Code-Game-Studios
- book-to-skill — https://github.com/virgiliojr94/book-to-skill
- obsidian-skills — https://github.com/kepano/obsidian-skills
- mcp-for-blender — https://github.com/ahujasid/mcp-for-blender
