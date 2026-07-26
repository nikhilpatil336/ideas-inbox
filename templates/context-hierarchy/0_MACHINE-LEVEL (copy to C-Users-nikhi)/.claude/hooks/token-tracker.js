#!/usr/bin/env node
// C:/Users/nikhi/.claude/hooks/token-tracker.js
// Prints a token usage bar in the terminal after every Claude response.

const fs = require('fs');
const path = require('path');
const os = require('os');

// ── Config: set to your actual monthly token limit ──────────────
const PLAN_LIMIT = 900000;
const LOG_FILE   = path.join(os.homedir(), '.claude', 'token-log.json');
const BAR_WIDTH  = 40;

const inputTokens  = parseInt(process.env.CLAUDE_INPUT_TOKENS  || '0', 10);
const outputTokens = parseInt(process.env.CLAUDE_OUTPUT_TOKENS || '0', 10);
const sessionCost  = inputTokens + outputTokens;

if (sessionCost === 0) process.exit(0);

let log = { daily: {}, weekly: {}, total: 0 };
try { log = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8')); } catch (_) {}

const now       = new Date();
const dayKey    = now.toISOString().slice(0, 10);
const weekStart = getWeekStart(now);
const weekKey   = weekStart.toISOString().slice(0, 10);

log.daily[dayKey]   = (log.daily[dayKey]   || 0) + sessionCost;
log.weekly[weekKey] = (log.weekly[weekKey] || 0) + sessionCost;
log.total           = (log.total           || 0) + sessionCost;

const cutoff = new Date(now - 30 * 864e5).toISOString().slice(0, 10);
Object.keys(log.daily).forEach(k => { if (k < cutoff) delete log.daily[k]; });

fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));

const todayTokens  = log.daily[dayKey]   || 0;
const weeklyTokens = log.weekly[weekKey] || 0;
const weeklyPct = Math.min(weeklyTokens / PLAN_LIMIT * 100, 100);
const filled    = Math.round(weeklyPct / 100 * BAR_WIDTH);
const bar       = '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
const remaining    = Math.max(PLAN_LIMIT - weeklyTokens, 0);
const remainingPct = (100 - weeklyPct).toFixed(1);

const LINE = '─'.repeat(60);
console.log('\n' + LINE);
console.log('  TOKEN USAGE');
console.log(`  This response : ${fmt(sessionCost)} tokens`);
console.log(`  Today         : ${fmt(todayTokens)} tokens`);
console.log(`  This week     : ${fmt(weeklyTokens)} / ${fmt(PLAN_LIMIT)}`);
console.log(`  [${bar}] ${weeklyPct.toFixed(1)}% used`);
console.log(`  Remaining     : ${fmt(remaining)} tokens (${remainingPct}% left)`);
console.log(LINE + '\n');

function fmt(n) { return n.toLocaleString(); }
function getWeekStart(d) {
  const day = new Date(d);
  const diff = (day.getDay() + 6) % 7;
  day.setDate(day.getDate() - diff);
  day.setHours(0, 0, 0, 0);
  return day;
}
