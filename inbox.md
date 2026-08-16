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

## community-tracker — repo: TBD
- [ ] Join Vaibhav Sisinty community, keep tabs on activity, flag/add anything useful. Needs a scope decision: which platform (Skool/Discord/etc.), what "keep tabs" means technically (poll + summarize? notify on keywords?).

## inflation-index — repo: TBD
- [ ] Build a personal inflation index: pull real inflation data per item/category, let user pick which items apply to them and assign weightage per item, show a pie chart of the weighted breakdown, with user accounts to save selections. Needs data-source decision (which inflation data source(s) to scrape/use) before implementing.

## job-application-pipeline — repo: TBD
- [ ] Crawl job boards (LinkedIn, Naukri, Instahyre, Indeed, plus international equivalents) for openings, use an LLM to tailor resume per posting, auto-submit applications. Must support jobs outside India (currency/visa/resume-format variance). High risk/complexity: LinkedIn/Naukri/Indeed actively block scraping and ToS-ban automated accounts — needs an explicit user decision on acceptable risk (proxies/anti-bot evasion vs. official APIs where available) before implementation.

## linkedin-automation — repo: TBD
- [ ] Automate LinkedIn: send connection requests, post comments, and later request referrals from the resulting network. Violates LinkedIn's ToS (automation is explicitly disallowed) — real risk of account restriction/ban. Needs user go-ahead on that risk before implementing.

## trek-website — repo: TBD
- [ ] Build a marketing/booking website for a friend's trekking business, to help him attract more customers for his treks. Needs basic scope input: number of pages, whether booking/payment is required, branding assets.

## secondhand-phone-finder — repo: TBD
- [ ] Scrape Kleinanzeigen for 2nd-hand mobile phone listings and surface the best-value options (price vs. condition/specs).

## new-phone-price-finder — repo: TBD
- [ ] Compare new mobile phone prices on Flipkart and Amazon India to find the lowest price for a given model — prefer official affiliate APIs (Amazon PA-API, Flipkart Affiliate API) over raw scraping where available.
