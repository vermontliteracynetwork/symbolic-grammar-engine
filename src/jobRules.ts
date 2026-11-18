// Her rules for words that do more than one job (part of speech), her prepositions list, and the list of words that can
// do more than one job. Curriculum only: an app's own word lists, word forms and pictures live in that app.
import { jobsDetail } from './grammarEngine';
import { wordsRanked } from './writer/spell';
import type { SymbolWordClass } from './grammarSymbols';

/* ---------- Words with more than one job (her request 2026-11-17: "remember how important the part of speech logic is
   for our curriculum ... a list view for words that have multiple functions in parts of speech, so we can create rules on
   how to know what type it is") ---------- */

export interface MultiJobWord { word: string; jobs: SymbolWordClass[]; common: SymbolWordClass[] }

/** Every word in the word lists that can do more than one job, with each job (common uses first). */
export function multiJobWords(maxRank = 0): MultiJobWord[] {
  const out: MultiJobWord[] = [];
  for (const w of wordsRanked(maxRank)) {
    if (!/^[a-z]+$/.test(w)) continue;
    const d = jobsDetail(w);
    if (d && d.all.length > 1) out.push({ word: w, jobs: d.all, common: d.common });
  }
  return out.sort((a, b) => a.word.localeCompare(b.word));
}

export interface JobRule { jobs: [SymbolWordClass, SymbolWordClass]; title: string; rules: string[]; examples: [string, string][] }

/** How to tell which job a word is doing, for each pair of jobs. These are the engine's own rules (RULES.md section 3),
 *  written for students; each example pair uses the same word both ways. */
export const JOB_RULES: JobRule[] = [
  {
    jobs: ['noun', 'verb'], title: 'Noun or verb?',
    rules: [
      'After a, an, the, my, this or a number, it is a noun: the run, my walk.',
      'Right after a Who (I, she, the dog, Sam), it is the verb: they run.',
      'After will, can, did or to, it is a verb: will run, want to walk.',
      'Every sentence needs a verb: the first word after the Who that can be a verb is the verb.',
    ],
    examples: [['We take a walk.', 'We walk home.'], ['The play was fun.', 'The kids play outside.']],
  },
  {
    jobs: ['adjective', 'noun'], title: 'Adjective or noun?',
    rules: [
      'Right before a noun, it describes it, so it is an adjective: a gold ring.',
      'With no noun after it, after a, an or the, it is the noun: The gold shines.',
      'After be, feel, look or seem, it describes the Who: The ring is gold.',
    ],
    examples: [['She has a cold nose.', 'She has a cold.'], ['The pink hat fell.', 'Pink is my color.']],
  },
  {
    jobs: ['adjective', 'verb'], title: 'Adjective or verb?',
    rules: [
      'After be, feel, look or seem, it describes the Who, so it is an adjective: The door is open.',
      'Right after a Who, it is the verb: We open the door.',
      'Between a, an or the and a noun, it describes: an open door.',
    ],
    examples: [['The window is clean.', 'We clean the window.'], ['The room is empty.', 'They empty the box.']],
  },
  {
    jobs: ['adjective', 'adverb'], title: 'Adjective or adverb?',
    rules: [
      'If it tells how, when or where about a verb, it is an adverb: She ran fast.',
      'If it describes a noun, or comes after be, it is an adjective: a fast car, The car is fast.',
    ],
    examples: [['He is a hard worker.', 'He works hard.'], ['The early bus came.', 'The bus came early.']],
  },
  {
    jobs: ['preposition', 'adverb'], title: 'Preposition or adverb?',
    rules: [
      'With a noun after it, it is a preposition and starts a prepositional phrase: up the hill.',
      'With no noun after it, it tells where, so it is an adverb: She looked up.',
    ],
    examples: [['The cat ran up the tree.', 'The cat looked up.'], ['We went inside the house.', 'We went inside.']],
  },
  {
    jobs: ['preposition', 'conjunction'], title: 'Preposition or joining word?',
    rules: [
      'With only a noun after it, it is a preposition: after lunch.',
      'With a Who and its verb after it, it joins two parts, so it is a conjunction: after we ate.',
    ],
    examples: [['We played after lunch.', 'We played after we ate.'], ['Wait until noon.', 'Wait until the bus comes.']],
  },
  {
    jobs: ['adjective', 'pronoun'], title: 'Adjective or pronoun?',
    rules: [
      'Right before a noun, it points to the noun, so it is an adjective: this book, some apples.',
      'Standing alone in place of a noun, it is a pronoun: I like this. Some fell.',
    ],
    examples: [['That dog is big.', 'That is big.'], ['Some kids ran.', 'Some ran.']],
  },
  {
    jobs: ['noun', 'adverb'], title: 'Noun or adverb?',
    rules: [
      'As the Who or after a preposition, it is a noun: Today is sunny. I wait for tomorrow.',
      'Telling when or where about the verb, it is an adverb: We swim today.',
    ],
    examples: [['Home is warm.', 'We went home.'], ['Yesterday was fun.', 'We played yesterday.']],
  },
];

/** The rule card for two jobs, in either order. */
export const jobRuleFor = (a: SymbolWordClass, b: SymbolWordClass): JobRule | undefined =>
  JOB_RULES.find((r) => (r.jobs[0] === a && r.jobs[1] === b) || (r.jobs[0] === b && r.jobs[1] === a));

/** Her prepositions list (Prepositional Phrases, 2026-11-17): every word and word group that can start a prepositional
 *  phrase. A word from the list with no object after it is not working as a preposition ("She looked up."). */
export const PREPOSITION_LIST: string[] = [
  'about', 'above', 'according to', 'across', 'after', 'against', 'along', 'amid', 'among', 'around', 'at', 'atop', 'because of', 'before',
  'below', 'beneath', 'beside', 'between', 'beyond', 'but (meaning except)', 'by', 'concerning', 'down', 'during', 'except', 'for', 'from',
  'in', 'in spite of', 'inside', 'instead of', 'into', 'like', 'near', 'of', 'off', 'on', 'on account of', 'onto', 'out', 'out of', 'outside',
  'over', 'regarding', 'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath', 'until', 'up', 'upon', 'with', 'within', 'without',
];
