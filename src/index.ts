// Symbolic Grammar Engine: her Symbolic Grammar curriculum as code (symbols, formulas, formula codes and the rules for
// reading a word's job). It is the only thing Literacy Manipulatives and the independent work dashboard share; each
// program keeps its own app code (games, dictionaries, pictures, word lists, saved words).
// See README.md (how to use it) and RULES.md (every rule, in plain words).
export { configureEngine, type EngineConfig } from './config';
export {
  ENGINE_VERSION, loadEngine, engineReady, readText, readWords, symbolsFor, readWithWhy, jobsOfWord, jobsDetail, isKnown, fitsJob, mainJob, TYPE_NAME,
  type WordReading, type TaggedWord,
} from './grammarEngine';
export { GRAMMAR_SYMBOL_INFO, TENSE_SYMBOLS, type SymbolWordClass, type WordClassInfo } from './grammarSymbols';
export { formulaCode, sentenceSlots, cardSlotsOf, closestFormula, formulasLike, slotDistance, slotLabel, slotClass, type Slot } from './writer/formulaMatch';
export { FORMULA_LIST, type ListedFormula } from './writer/formulaList';
export { MASTER_FORMULAS, type MasterFormula } from './writer/masterList';
export { LESSON_BREAKDOWN, type BreakdownUnit, type BreakdownLesson, type BreakdownSkill, type BreakdownFormula } from './writer/lessonBreakdown';
export { BREAKDOWN_FORMULAS, formulaPartsOf, type ListedBreakdownFormula } from './writer/breakdownFormulas';
export { multiJobWords, JOB_RULES, jobRuleFor, PREPOSITION_LIST, type MultiJobWord, type JobRule } from './jobRules';
export { SENTENCE_FORMULAS, type SentenceFormula } from './writer/formulas';
export { splitSentences, checkSentence, tagForCheck, tagEngine, type SentenceSpan, type CheckResult } from './writer/sentenceCheck';
export { addCorrection, removeCorrection, corrections, sharedCorrections, setSharedCorrections, accuracy, type Correction } from './writer/corrections';
export { checkEngine, TO_TEACH, type EngineCheck } from './writer/engineCheck';
export { TAG_TESTS, type TagTest } from './writer/engineTests';
export { tenseVersions, pastOf, baseOf, third } from './writer/tenses';
export { wordsRanked } from './writer/spell';
export { lookUpWords, onWordTypes, liveLookupsAllowed, rememberTypes, typeOfPart, loadWordTypes } from './wordTypes';
