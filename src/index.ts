// Symbolic Grammar Engine: one grammar engine for every Symbolic Grammar and Literacy Manipulatives project.
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
export { MASTER_CARDS, type MasterCard } from './writer/masterCards';
export { wordsOfType, pluralOf, ingOf, verbForms, multiJobWords, JOB_RULES, jobRuleFor, type MultiJobWord, type JobRule } from './dictionary';
export { SENTENCE_FORMULAS, type SentenceFormula } from './writer/formulas';
export { splitSentences, checkSentence, tagForCheck, tagEngine, type SentenceSpan, type CheckResult } from './writer/sentenceCheck';
export { addCorrection, removeCorrection, corrections, sharedCorrections, setSharedCorrections, accuracy, type Correction } from './writer/corrections';
export { checkEngine, TO_TEACH, type EngineCheck } from './writer/engineCheck';
export { TAG_TESTS, type TagTest } from './writer/engineTests';
export { tenseVersions, pastOf, baseOf, third } from './writer/tenses';
export { wordsRanked } from './writer/spell';
export { lookUpWords, onWordTypes, liveLookupsAllowed, rememberTypes, typeOfPart, loadWordTypes } from './wordTypes';
