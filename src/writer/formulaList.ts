import { MASTER_FORMULAS } from './masterList';

// Her formula list, read from her master list ("All Formulas", 2026-11-17, src/writer/masterList.ts): every
// sentence formula with its code, levels, formula (the symbols in order), model sentence and required words, plus
// its unit, skill, shorthand name and purpose. Every program reads formulas from here.
export interface ListedFormula {
  code: string; levels: string[]; breakdown: string; example: string; required: string;
  unit: string; skill: string; name: string; purpose: string;
}

export const FORMULA_LIST: ListedFormula[] = MASTER_FORMULAS.map((f) => ({
  code: f.code, levels: f.levels, breakdown: f.formula, example: f.sentence, required: f.required,
  unit: f.unit, skill: f.skill, name: f.name, purpose: f.purpose,
}));
