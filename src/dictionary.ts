// One dictionary for every program (her request 2026-11-17: "We need to have one defined dictionary and logic base that
// will run the independent work dashboard and all literacy manipulatives apps"). Lists the dictionary's words by their
// grammar symbol (part of speech), with the same jobsOfWord() logic that reads every sentence, and writes word forms
// (many, past, -ing). Call loadEngine() first.
import { jobsOfWord } from './grammarEngine';
import { wordsRanked } from './writer/spell';
import { baseOf, pastOf, third } from './writer/tenses';
import type { SymbolWordClass } from './grammarSymbols';

const cache = new Map<string, string[]>();

/** Every word of one type in the word lists, A to Z. maxRank 0 = the most common words (about 4,000), up to 3. A noun
 *  is listed once (not its plural) and a verb once (its plain form: run, not runs or ran). */
export function wordsOfType(type: SymbolWordClass, maxRank = 0): string[] {
  const key = `${type}|${maxRank}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const out = new Set<string>();
  for (const w of wordsRanked(maxRank)) {
    if (!/^[a-z]+$/.test(w)) continue;
    const jobs = jobsOfWord(w);
    if (!jobs.includes(type)) continue;
    if (type === 'noun' && w.endsWith('s') && jobsOfWord(w.slice(0, -1)).includes('noun')) continue;
    if (type === 'verb' && baseOf(w) !== w) continue;
    out.add(w);
  }
  const list = [...out].sort();
  if (list.length) cache.set(key, list);
  return list;
}

/** More than one: dog → dogs, box → boxes, baby → babies. */
export const pluralOf = (w: string): string => (/(s|x|z|ch|sh)$/.test(w) ? `${w}es` : /[^aeiou]y$/.test(w) ? `${w.slice(0, -1)}ies` : `${w}s`);

/** The -ing form: run → running, make → making, tie → tying. */
export const ingOf = (b: string): string =>
  /ie$/.test(b) ? `${b.slice(0, -2)}ying` : /[^e]e$/.test(b) ? `${b.slice(0, -1)}ing` : /^[^aeiou]*[aeiou][bdgmnprt]$/.test(b) ? `${b}${b.slice(-1)}ing` : `${b}ing`;

/** Every form of a verb from its plain form. */
export function verbForms(base: string): { base: string; third: string; past: string; ing: string } {
  return { base, third: third(base), past: pastOf(base), ing: ingOf(base) };
}
