# Symbolic Grammar Engine

One grammar engine for every Symbolic Grammar and Literacy Manipulatives project: the grammar symbol for every word,
sentence formulas, and her formula codes. The rules are in [RULES.md](RULES.md).

Used by: Literacy Manipulatives (Whiteboard, Word Processor, Word Explorer, Word List Maker, Formula Search, Daily
Procedure) and the independent work dashboard.

## Use it in a project

1. Install it, pinned to one version (a commit) so every project uses the same rules:
   `npm install github:vermontliteracynetwork/symbolic-grammar-engine#<commit>`
   Every project pins the same commit; see Versions below.
2. Copy its word lists and symbol pictures into the app's public folder (add this to `predev` and `prebuild`):
   `node node_modules/symbolic-grammar-engine/scripts/copy-assets.mjs public`
3. Use it:

```ts
import { loadEngine, readText, fitsJob, formulaCode, sentenceSlots, GRAMMAR_SYMBOL_INFO } from 'symbolic-grammar-engine';

await loadEngine();                       // loads the word lists (from /writer by default)
readText('A dog sees the plant.');         // each word with its symbol: article, noun, verb, article, noun
fitsJob('happy', 'verb');                  // 'no' (happy is an adjective)
```

The engine is TypeScript source; a Vite (or any TypeScript) app uses it as it is. A Node script passes its own file
loader: `configureEngine({ loadJson: (name) => ... })` (see `test/run.ts`).

## Check it

In a project that installs the engine, its build runs the same checks (Literacy Manipulatives: `npm run test:engine`).

`npm test` runs every check (80 test sentences, her master list's 129 formulas, her 118 formula cards, every shared fix) and fails
if anything is wrong. GitHub runs it on every change.

## Share teacher fixes

A teacher's fixes from Formula Search ("Send my fixes to the engine") are added with
`npm run add-fixes <downloaded file>`, then `npm test`. Every project that updates to the new version gets them.

## Data and licenses

- `data/pos.json`: parts of speech from Princeton WordNet 3.0 (`data/WORDNET-LICENSE.txt`).
- `data/words.json`: SCOWL word lists (`data/WORDLIST-COPYRIGHT.txt`).
- `assets/grammar-symbols/`: her grammar symbol pictures (owned).
- Formula list and formula codes: her Symbolic Grammar materials (owned).

## Versions

Every project pins the same engine commit. To update a project: change the commit in its package.json, run
`npm install`, and its build runs the engine checks.

- **1.8.0** (2026-11-20): prepositions (her note: "Prepositions really need to be worked on"). A word on her prepositions list is a preposition whenever its object follows, even after a describing word, an -ing word, a question word or another preposition (bands of very strong tissue, without noticing, about how important, from off the ground); because of and instead of are one preposition. Measured on 2,039 hand-checked sentences from five reading-passage books: prepositions found went from 89.7% to 94.8%, with 98.5% of the engine's prepositions right. A preposition on its own at the end of a clause (We stayed in.) still reads as telling where, as her formula list codes it, until she settles D-25.
- **1.7.0** (2026-11-20): `formulaSentences(text)`: the sentences of a passage for formula research. What someone says is its own sentence, a speech tag ("asked Quentin.", "she said,") is never one, a quote inside a sentence stays in it, and only complete sentences come back. Same rules and results otherwise.
- **1.6.0** (2026-11-19): word forms for every program (`src/writer/wordForms.ts`): `pastOf`, `pastParticipleOf`, `ingOf`, `third`, `baseOf`, `pluralOf`, `comparisonOf`, `irregularVerb`, `isIrregularPast`, `IRREGULAR_VERBS`. About 190 irregular verbs (and their re-, un-, over-, under-, out-, mis-, fore-, with-, up- and be- forms: rewrote, undid, became) instead of about 120, so no verb gets -ed it does not take; regular spelling rules (hopped, cried, panicked, admitted, visited, traveled). `npm test` checks 350 word forms. Same sentence rules and results.
- **1.5.0** (2026-11-19): her Lesson Breakdown, Units 1-8 and Compositions (the most current version): `LESSON_BREAKDOWN` (units, lessons, skills and the formula set for each skill), `BREAKDOWN_FORMULAS` (every one, in order) and `formulaPartsOf(code, example)`. Imported by `scripts/import-lesson-breakdown.py` from `docs/source/Symbolic_Grammar_Lesson_Breakdown.pdf`.
- **1.4.0** (2026-11-18): curriculum only (see What belongs here). `dictionary.ts` is now `jobRules.ts`; Literacy
  Manipulatives' word lists, card pictures and My dictionary moved into that app; `configureEngine({ ownWord })`. Same rules and results.
- **1.2.0** (2026-11-13): `configureEngine({ liveLookups })` (the dashboard keeps its live dictionary lookups), `rememberTypes` and
  `typeOfPart` (a dictionary lookup in an app teaches the engine), and `copy-assets.mjs --no-symbols`. Same rules and results.
- **1.1.0** (2026-11-13): `readWords` (a sentence as a list of words), `jobsDetail` (all and common jobs of a word),
  `lookUpWords`/`onWordTypes` exported, and every source file importable as `symbolic-grammar-engine/src/...`, so the
  independent work dashboard can use the engine. Same rules and results as 1.0.0.
- **1.0.0** (2026-11-13): the engine moved here from Literacy Manipulatives.

## What belongs here (1.4.0)

Her rule (2026-11-18): "The engine for the kids' dashboard should be completely different than the literacy
manipulatives app. The only thing that should be shared between them is the symbolic grammar engine, because that is a
curriculum that I'm building that will fuel both of the programs."

So this engine holds the curriculum only:
- her grammar symbols and tense symbols (`GRAMMAR_SYMBOL_INFO`, `TENSE_SYMBOLS`) and her symbol sentence deck;
- her master formula list and formula codes (`MASTER_FORMULAS`, `FORMULA_LIST`, `formulaCode`, `sentenceSlots`);
- the rules for reading a word's job in a sentence (`readText`, `jobsOfWord`, `jobsDetail`, RULES.md), the word lists
  those rules need, and her job rules (`JOB_RULES`, `multiJobWords`, `PREPOSITION_LIST`);
- past, present and future (`tenseVersions`), every word's forms (past, -ing, plural, more and most: `pastOf`, `ingOf`, `pluralOf`...) and the engine checks.

Everything else belongs to the program that uses it and is never shared: games, screens, dictionaries and thesauruses,
pictures, word books, saved words, card pictures and word forms for a video. 1.4.0 moved the Literacy Manipulatives
parts out (Story Maker's `wordsOfType`/`pluralOf`/`ingOf`/`verbForms`, the formula card pictures `MASTER_CARDS`, and
the student's "My dictionary"). An app can hand the engine its own words with `configureEngine({ ownWord })`.
