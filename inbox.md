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
- [ ] Join Vaibhav Sisinty community, keep tabs on activity, flag/add anything useful. Needs a scope decision: which platform (Skool/Discord/etc.), what "keep tabs" means technically (poll + summarize? notify on keywords?).

## inflation-index — repo: https://github.com/nikhilpatil336/scraper-platform (apps/inflation-index)
- [~] Build a personal inflation index: pull real inflation data per item/category, let user pick which items apply to them and assign weightage per item, show a pie chart of the weighted breakdown, with user accounts to save selections. Needs data-source decision (which inflation data source(s) to scrape/use) before implementing. **Blocked (2026-08-19):** which inflation data source(s) to use — no source specified, and options (govt CPI APIs vs. scraping third-party sites) have different reliability/legal tradeoffs. Also: this repo (`scraper-platform`) is currently inaccessible to the overnight agent's GitHub connection (see repo-access note on the headings below) — needs to be resolved regardless of the data-source decision.

## job-application-pipeline — repo: https://github.com/nikhilpatil336/scraper-platform (apps/job-application-pipeline)
- [~] Crawl job boards (LinkedIn, Naukri, Instahyre, Indeed, plus international equivalents) for openings, use an LLM to tailor resume per posting, auto-submit applications. Must support jobs outside India (currency/visa/resume-format variance). High risk/complexity: LinkedIn/Naukri/Indeed actively block scraping and ToS-ban automated accounts — needs an explicit user decision on acceptable risk (proxies/anti-bot evasion vs. official APIs where available) before implementation. **Blocked (2026-08-19):** acceptable-risk decision (scrape with anti-bot evasion vs. official APIs only, which limits coverage) not yet made — not attempted. Also blocked on `scraper-platform` repo access (see repo-access note below).

## linkedin-automation — repo: https://github.com/nikhilpatil336/scraper-platform (apps/linkedin-automation)
- [~] Automate LinkedIn: send connection requests, post comments, and later request referrals from the resulting network. Violates LinkedIn's ToS (automation is explicitly disallowed) — real risk of account restriction/ban. Needs user go-ahead on that risk before implementing. **Blocked (2026-08-19):** explicit go-ahead on ToS/ban risk not given — not attempted. Also blocked on `scraper-platform` repo access (see repo-access note below).

## trek-website — repo: TBD
- [ ] Build a marketing/booking website for a friend's trekking business, to help him attract more customers for his treks. Needs basic scope input: number of pages, whether booking/payment is required, branding assets.

## secondhand-phone-finder — repo: https://github.com/nikhilpatil336/scraper-platform (apps/secondhand-phone-finder)
- [~] Scrape Kleinanzeigen for 2nd-hand mobile phone listings and surface the best-value options (price vs. condition/specs). **Blocked (2026-08-19):** this idea itself has no open ambiguity — the overnight agent's GitHub connection has no access to the private `scraper-platform` repo (`add_repo`/`list_repos` don't see it), so it can't be cloned or pushed to. Needs: grant the Claude GitHub App access to `nikhilpatil336/scraper-platform` (claude.ai Settings → Connectors, or org/repo access settings), then flip back to `[ ]`.

## new-phone-price-finder — repo: https://github.com/nikhilpatil336/scraper-platform (apps/new-phone-price-finder)
- [~] Compare new mobile phone prices on Flipkart and Amazon India to find the lowest price for a given model — prefer official affiliate APIs (Amazon PA-API, Flipkart Affiliate API) over raw scraping where available. **Blocked (2026-08-19):** two things — (1) no Amazon PA-API / Flipkart Affiliate API credentials available to the agent, and falling back to raw scraping of Amazon/Flipkart carries the same ToS/anti-bot risk flagged on `job-application-pipeline`, so which approach to take needs a decision; (2) the overnight agent's GitHub connection has no access to the private `scraper-platform` repo regardless (see repo-access note below).
