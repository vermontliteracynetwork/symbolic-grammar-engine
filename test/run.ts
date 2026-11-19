// Runs every engine check in Node: the hand-checked test sentences (every word's symbol), her whole formula list
// (every code), and every shared fix in data/teacher-fixes.json. Exits with an error if anything is wrong, so a
// change that breaks the engine cannot be merged. Run: npm test (in this package).
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BREAKDOWN_FORMULAS } from '../src/writer/breakdownFormulas';
import { formulaCode, sentenceSlots } from '../src/writer/formulaMatch';
import { configureEngine, loadEngine, checkEngine, sharedCorrections, tagEngine, tagForCheck as tagFixed, multiJobWords, JOB_RULES, readText } from '../src/index';

const here = dirname(fileURLToPath(import.meta.url));
// ENGINE_DATA: where the word lists are when this file is run from another project (see README).
const dataDir = process.env.ENGINE_DATA ?? join(here, '..', 'data');
configureEngine({ loadJson: async (name) => JSON.parse(readFileSync(join(dataDir, name), 'utf8')) });

await loadEngine();
const r = checkEngine();
let failed = 0;
console.log(`Symbols: ${r.tags.pass} of ${r.tags.total} test sentences right word for word.`);
for (const m of r.tags.misses) { failed++; console.log(`  WRONG  ${m.sentence}\n         engine: ${m.got.join(' ')}\n         should: ${m.expect.join(' ')}`); }
console.log(`Formula codes: ${r.codes.pass} of ${r.codes.total} examples in her list coded right.`);
for (const m of r.codes.misses) { failed++; console.log(`  WRONG  ${m.sentence}  engine: ${m.got}  her list: ${m.expect}`); }
if (r.codes.toTeach.length) console.log(`Still to teach the engine (${r.codes.toTeach.length}, listed in TO_TEACH; they do not stop a build):`);
for (const m of r.codes.toTeach) console.log(`  LATER  ${m.sentence}  engine: ${m.got}  her list: ${m.expect}`);
console.log(`Formula cards: ${r.cards.pass} of ${r.cards.total} model sentences match their own card.`);
for (const m of r.cards.misses) { failed++; console.log(`  WRONG  card ${m.lesson}: ${m.sentence}`); }
// Every shared fix must hold (with the fixes applied, the fixed word gets the fixed symbol).
const fixes = sharedCorrections();
const tagForCheck = tagFixed;
let fixesOk = 0;
for (const c of fixes) {
  const words = tagForCheck(c.sentence);
  const i = words.findIndex((w, k) => w.word.toLowerCase() === c.word && (words[k - 1]?.word.toLowerCase() ?? '') === c.prev && (words[k + 1]?.word.toLowerCase() ?? '') === c.next);
  if (i >= 0 && words[i].wordClass === c.to) fixesOk++;
  else { failed++; console.log(`  WRONG  shared fix "${c.word}" in "${c.sentence}" should be ${c.to}`); }
}
console.log(`Shared fixes: ${fixesOk} of ${fixes.length} hold.`);
// Her Lesson Breakdown: every formula's example, coded the engine's way, against her code (shown, not failed).
{ let same = 0; for (const f of BREAKDOWN_FORMULAS) { try { const words = tagFixed(f.example); if (formulaCode(sentenceSlots(words, f.example), f.example) === f.code) same++; } catch { /* skip */ } } console.log(`Lesson Breakdown: ${BREAKDOWN_FORMULAS.length} formulas, ${same} coded the same way by the engine.`); }
console.log(`Words with more than one job: ${multiJobWords().length}.`);
// Every example in the job rules must read the way its rule says: the same word, two different jobs.
let rulesOk = 0;
for (const r of JOB_RULES) for (const [a, b] of r.examples) {
  const wa = readText(a), wb = readText(b);
  const shared = wa.map((x) => x.word.toLowerCase()).find((w) => wb.some((y) => y.word.toLowerCase() === w) && wa.find((x) => x.word.toLowerCase() === w)!.wordClass !== wb.find((y) => y.word.toLowerCase() === w)!.wordClass && r.jobs.includes(wa.find((x) => x.word.toLowerCase() === w)!.wordClass) && r.jobs.includes(wb.find((y) => y.word.toLowerCase() === w)!.wordClass));
  if (shared) rulesOk++; else console.log(`  CHECK  job rule "${r.title}": "${a}" / "${b}" do not read as ${r.jobs.join(' and ')}`);
}
console.log(`Job rule examples: ${rulesOk} of ${JOB_RULES.reduce((n, r) => n + r.examples.length, 0)} read both ways.`);
void tagEngine;
if (failed) { console.log(`\n${failed} problem(s). Fix the rule (or the test, if the test is wrong) before merging.`); process.exit(1); }
console.log('\nAll engine checks passed.');
