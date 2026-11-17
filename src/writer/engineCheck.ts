import { tagEngine } from './sentenceCheck';
import { formulaCode, sentenceSlots, slotDistance } from './formulaMatch';
import { SENTENCE_FORMULAS } from './formulas';
import { FORMULA_LIST } from './formulaList';
import { TAG_TESTS } from './engineTests';
import type { SymbolWordClass } from '../grammarSymbols';

// Checks the grammar engine (her request 2026-11-13: a strong logic behind the mark ups and grammar symbols for all
// programs): every hand-checked test sentence word by word, and every example in her All Sentence Formulas list by
// its formula code. Formula Search's passage tab shows the result.
export interface EngineCheck {
  tags: { pass: number; total: number; misses: { sentence: string; got: SymbolWordClass[]; expect: SymbolWordClass[] }[] };
  codes: { pass: number; total: number; misses: { sentence: string; got: string; expect: string }[]; toTeach: { sentence: string; got: string; expect: string }[] };
  cards: { pass: number; total: number; misses: { sentence: string; lesson: string }[] };
}
// Sentences in her master list (2026-11-17) the engine does not code her way yet. Each is reported on every run as
// "still to teach" but does not stop a build; take one off this list once the engine codes it right. Two of them
// follow a different rule than her code order and opening-word rule (see RULES.md, "Her master list").
export const TO_TEACH = new Set([
  'The small cat chased Max.',
  'First, wash your hands.',
  'We bought apples, bread, and milk.',
  'The bell rang; class was over.',
  'The big dog jumped over and around the cat.',
  'Slowly, the turtle crawled and quickly the hare ran.',
  'Penguins are amazing birds.',
  'I think that recess should be longer because we need exercise.',
  'Some people think that recess wastes time but it helps us focus.',
]);

export function checkEngine(): EngineCheck {
  const tagMisses: EngineCheck['tags']['misses'] = [];
  for (const t of TAG_TESTS) {
    const got = tagEngine(t.sentence).map((w) => w.wordClass);
    if (got.join() !== t.expect.join()) tagMisses.push({ sentence: t.sentence, got, expect: t.expect });
  }
  const codeMisses: EngineCheck['codes']['misses'] = [];
  const toTeach: EngineCheck['codes']['misses'] = [];
  for (const f of FORMULA_LIST) {
    const text = f.example.replace(/[“”]/g, '"');
    const got = formulaCode(sentenceSlots(tagEngine(text), text), text);
    if (got !== f.code.replace(/\*$/, '')) (TO_TEACH.has(f.example) ? toTeach : codeMisses).push({ sentence: f.example, got, expect: f.code });
  }
  // Every formula card's model sentence must read as its own card.
  const cardMisses: EngineCheck['cards']['misses'] = [];
  for (const f of SENTENCE_FORMULAS) if (slotDistance(f.slots, sentenceSlots(tagEngine(f.sentence), f.sentence)) !== 0) cardMisses.push({ sentence: f.sentence, lesson: f.lesson });
  return {
    cards: { pass: SENTENCE_FORMULAS.length - cardMisses.length, total: SENTENCE_FORMULAS.length, misses: cardMisses },
    tags: { pass: TAG_TESTS.length - tagMisses.length, total: TAG_TESTS.length, misses: tagMisses },
    codes: { pass: FORMULA_LIST.length - codeMisses.length - toTeach.length, total: FORMULA_LIST.length, misses: codeMisses, toTeach },
  };
}
