import { LESSON_BREAKDOWN, type BreakdownFormula } from './lessonBreakdown';
import { MASTER_FORMULAS } from './masterList';
import { tagForCheck } from './sentenceCheck';

// Every formula in her Lesson Breakdown, in order, with where it is taught and its parts of speech ("article noun
// verb"): from her Sentence Formulas list when the code is there, otherwise read from its example by the engine.
export interface ListedBreakdownFormula extends BreakdownFormula { unit: string; unitTitle: string; lesson: string; skill: string; skillTitle: string }

export const BREAKDOWN_FORMULAS: ListedBreakdownFormula[] = LESSON_BREAKDOWN.flatMap((u) => u.lessons.flatMap((l) => l.skills.flatMap((s) =>
  s.formulas.map((f) => ({ ...f, unit: u.id, unitTitle: u.title, lesson: l.id, skill: s.id, skillTitle: s.title })))));

const NAMES: Record<string, string> = { propernoun: 'proper noun' };
/** The parts of speech of a formula, as words: "article noun verb". */
export function formulaPartsOf(code: string, example = ''): string {
  const m = MASTER_FORMULAS.find((x) => x.code === code && (!example || x.sentence === example)) ?? MASTER_FORMULAS.find((x) => x.code === code);
  if (m) return m.formula;
  if (!example) return '';
  try { return tagForCheck(example).map((w) => NAMES[w.wordClass] ?? w.wordClass).join(' '); } catch { return ''; }
}
