import { wordJobs } from '../sentenceSearch';
import { commonDictionaryJobs, isWord, wordRank } from './spell';

// Every form of a word, made one way for every program (her request 2026-11-19: "the main Symbolic Grammar Engine
// needs to fuel all literacy manipulatives tools/apps ... so we dont have past tense verbs with ed added arbitrarily").
// Past and past participle (ran, run), the -ing form, the he/she/it form, plurals, and more/most. Irregular verbs
// come from the table below, never from adding -ed; regular verbs follow the spelling rules (hop: hopped, hope: hoped,
// cry: cried, panic: panicked, visit: visited). American spelling (traveled, canceled).

// base past participle (a / means either is right; the first is the one the engine writes).
const IRREGULAR_TABLE = `
arise arose arisen|awake awoke awoken|be was been|bear bore born|beat beat beaten|become became become
begin began begun|bend bent bent|bet bet bet|bid bid bid|bind bound bound|bite bit bitten|bleed bled bled
blow blew blown|break broke broken|breed bred bred|bring brought brought|broadcast broadcast broadcast
build built built|burst burst burst|buy bought bought|cast cast cast|catch caught caught|choose chose chosen
cling clung clung|come came come|cost cost cost|creep crept crept|cut cut cut|deal dealt dealt|dig dug dug
dive dove dived|do did done|draw drew drawn|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen
feed fed fed|feel felt felt|fight fought fought|find found found|flee fled fled|fling flung flung|fly flew flown
forbid forbade forbidden|forecast forecast forecast|forget forgot forgotten|forgive forgave forgiven
freeze froze frozen|get got gotten|give gave given|go went gone|grind ground ground|grow grew grown
hang hung hung|have had had|hear heard heard|hide hid hidden|hit hit hit|hold held held|hurt hurt hurt
keep kept kept|kneel knelt knelt|knit knit knit|know knew known|lay laid laid|lead led led|leap leapt leapt
leave left left|lend lent lent|let let let|lie lay lain|light lit lit|lose lost lost|make made made|mean meant meant
meet met met|mislead misled misled|mistake mistook mistaken|mow mowed mown|overcome overcame overcome
pay paid paid|prove proved proven|put put put|quit quit quit|read read read|rid rid rid|ride rode ridden
ring rang rung|rise rose risen|run ran run|saw sawed sawn|say said said|see saw seen|seek sought sought
sell sold sold|send sent sent|set set set|sew sewed sewn|shake shook shaken|shed shed shed|shine shone shone
shoot shot shot|show showed shown|shrink shrank shrunk|shut shut shut|sing sang sung|sink sank sunk|sit sat sat
slay slew slain|sleep slept slept|slide slid slid|sling slung slung|slit slit slit|sneak snuck snuck
sow sowed sown|speak spoke spoken|speed sped sped|spend spent spent|spin spun spun|spit spit spit
split split split|spread spread spread|spring sprang sprung|stand stood stood|steal stole stolen|stick stuck stuck
sting stung stung|stink stank stunk|stride strode stridden|strike struck struck|string strung strung
strive strove striven|swear swore sworn|sweep swept swept|swell swelled swollen|swim swam swum|swing swung swung
take took taken|teach taught taught|tear tore torn|tell told told|think thought thought|throw threw thrown
thrust thrust thrust|tread trod trodden|understand understood understood|upset upset upset|wake woke woken
wear wore worn|weave wove woven|wed wed wed|weep wept wept|wet wet wet|win won won|wind wound wound
withdraw withdrew withdrawn|withhold withheld withheld|withstand withstood withstood|wring wrung wrung
write wrote written|fit fit fit|forsake forsook forsaken|beget begot begotten|behold beheld beheld
`;

interface Irregular { past: string; participle: string }
export const IRREGULAR_VERBS: Record<string, Irregular> = {};
for (const row of IRREGULAR_TABLE.trim().split(/[|\n]/)) {
  const [base, past, participle] = row.trim().split(/\s+/);
  if (base) IRREGULAR_VERBS[base] = { past, participle };
}

// Prefixes that keep the verb's own forms: rewrite → rewrote, overeat → overate, undo → undid, become → became.
const PREFIXES = ['under', 'over', 'with', 'fore', 'out', 'mis', 're', 'un', 'up', 'be'];
// Words that only look like a prefix plus an irregular verb.
const NOT_PREFIXED = new Set(['behave', 'belay', 'belie', 'befit', 'relay', 'outlay', 'inlay']);

/** The irregular forms of a verb (ran, run for run; rewrote, rewritten for rewrite), or undefined for a regular verb. */
export function irregularVerb(base: string): Irregular | undefined {
  const b = base.toLowerCase();
  if (IRREGULAR_VERBS[b]) return IRREGULAR_VERBS[b];
  if (NOT_PREFIXED.has(b)) return undefined;
  for (const p of PREFIXES) {
    if (!b.startsWith(p)) continue;
    const root = b.slice(p.length);
    const f = root.length >= 2 ? IRREGULAR_VERBS[root] : undefined;
    // "be" itself is not a root here (bebe), and "be" + "at" is "beat" (already in the table).
    if (f && root !== 'be') return { past: p + f.past, participle: p + f.participle };
  }
  return undefined;
}

// Two-syllable verbs said with the beat on the end double their last letter (admit → admitted, prefer → preferred).
// Others do not (visit → visited, open → opened, travel → traveled).
const STRESSED_END = new Set(['admit', 'commit', 'permit', 'submit', 'omit', 'emit', 'transmit', 'remit', 'acquit', 'outwit',
  'prefer', 'refer', 'confer', 'defer', 'infer', 'transfer', 'occur', 'recur', 'incur', 'concur', 'deter', 'regret', 'control',
  'patrol', 'equip', 'compel', 'expel', 'propel', 'repel', 'dispel', 'rebel', 'excel', 'abhor', 'allot', 'extol', 'annul',
  'embed', 'unplug', 'unzip', 'unpin', 'unwrap', 'unclip', 'unclog', 'unstrap', 'rerun', 'refit', 'rebut', 'recap', 'retag',
  'kidnap', 'handicap', 'format', 'program', 'zigzag', 'outfit']);
// One-syllable words that end in one vowel and one consonant (hop, stop, plan, quiz). w, x and y never double.
const SHORT_CVC = /^(qu|[^aeiou]*)[aeiou][^aeiouwxy]$/;
function doublesLast(b: string): boolean {
  if (STRESSED_END.has(b)) return true;
  const vowels = (b.replace(/^qu/, 'q').replace(/^y/, 'z').match(/[aeiouy]+/g) ?? []).length;
  return vowels === 1 && SHORT_CVC.test(b.replace(/^y/, 'z'));
}

/** Add -ed or -ing with the spelling rules: hop → hopp, hope → hop, cry → cri (-ed only), panic → panick. */
function stemFor(b: string, ending: 'ed' | 'ing'): string {
  if (ending === 'ed') {
    if (/e$/.test(b)) return b.slice(0, -1);
    if (/[^aeiou]y$/.test(b)) return `${b.slice(0, -1)}i`;
  } else {
    if (b === 'be' || /(ee|ye|oe)$/.test(b) || b === 'singe' || b === 'dye') return b;
    if (/ie$/.test(b)) return `${b.slice(0, -2)}y`;
    if (/e$/.test(b) && b.length > 2) return b.slice(0, -1);
  }
  if (/ic$/.test(b)) return `${b}k`;
  if (doublesLast(b)) return `${b}${b.slice(-1)}`;
  return b;
}

/** Past: jump → jumped, run → ran, hop → hopped, cry → cried, rewrite → rewrote. */
export function pastOf(base: string): string {
  const b = base.toLowerCase();
  return irregularVerb(b)?.past ?? `${stemFor(b, 'ed')}ed`;
}
/** The form after have/has/had: jump → jumped, run → run, eat → eaten, write → written. */
export function pastParticipleOf(base: string): string {
  const b = base.toLowerCase();
  return irregularVerb(b)?.participle ?? `${stemFor(b, 'ed')}ed`;
}
/** The -ing form: run → running, make → making, tie → tying, see → seeing, panic → panicking. */
export function ingOf(base: string): string {
  return `${stemFor(base.toLowerCase(), 'ing')}ing`;
}
/** What he, she or it does: run → runs, go → goes, fly → flies, have → has, be → is. */
export function third(base: string): string {
  const b = base.toLowerCase();
  if (b === 'be') return 'is';
  if (b === 'have') return 'has';
  if (/[^aeiou]y$/.test(b)) return `${b.slice(0, -1)}ies`;
  if (/(s|sh|ch|x|z|[^aeiou]o)$/.test(b)) return /[^s]z$/.test(b) && doublesLast(b) ? `${b}zes` : `${b}es`;
  return `${b}s`;
}

// Every irregular past and past participle, back to its verb (ran → run, eaten → eat, was → be).
let backMap: Map<string, string> | null = null;
function irregularBack(): Map<string, string> {
  if (backMap) return backMap;
  backMap = new Map();
  for (const [base, f] of Object.entries(IRREGULAR_VERBS)) {
    if (!backMap.has(f.past)) backMap.set(f.past, base);
    if (!backMap.has(f.participle)) backMap.set(f.participle, base);
  }
  for (const w of ['is', 'are', 'am', 'was', 'were', 'been', 'being']) backMap.set(w, 'be');
  backMap.set('has', 'have'); backMap.set('does', 'do');
  // A verb whose forms look like another verb's keep their own (saw is see's past, found is find's past).
  for (const [w, b] of [['saw', 'see'], ['found', 'find'], ['ground', 'grind'], ['lay', 'lie'], ['wound', 'wind'], ['left', 'leave'], ['bore', 'bear'], ['fell', 'fall']]) backMap.set(w, b);
  return backMap;
}
/** Is this an irregular past form that is not also its plain form (went, ran, swam, rewrote; not put or cut)? */
export function isIrregularPast(raw: string): boolean {
  const w = raw.toLowerCase();
  if (w === 'were') return true;
  // lay, wound, ground and bore are verbs of their own too (lay the book down), so they are not counted as only past.
  if (['lay', 'wound', 'ground', 'bore'].includes(w)) return false;
  const b = baseOf(w);
  return b !== w && irregularVerb(b)?.past === w;
}

const knownVerb = (w: string) => !!w && isWord(w) && (wordJobs(w).has('verb') || !!commonDictionaryJobs(w)?.includes('verb'));
/** A verb's plain form from any of its forms: jumped → jump, hopped → hop, cried → cry, ran → run, eaten → eat,
 *  runs → run, running → run. A word that is not one of a verb's forms comes back as it is (need, bed, red). */
export function baseOf(raw: string): string {
  const w = raw.toLowerCase();
  const back = irregularBack().get(w);
  if (back) return back;
  if (IRREGULAR_VERBS[w]) return w;
  for (const p of PREFIXES) {
    const root = w.slice(p.length);
    const b = w.startsWith(p) && root.length >= 2 ? irregularBack().get(root) : undefined;
    if (b && irregularVerb(p + b)) return p + b;
  }
  const tries: string[] = [];
  const found: string[] = [];
  if (!/(d|ing|s)$/.test(w)) return w;
  for (let cut = 1; cut <= 4 && cut < w.length - 1; cut++) {
    const stem = w.slice(0, -cut);
    tries.push(stem, `${stem}e`, stem.replace(/i$/, 'y'), stem.replace(/y$/, 'ie'), stem.replace(/(.)\1$/, '$1'), stem.replace(/ck$/, 'c'));
  }
  for (const c of tries) {
    if (c === w || c.length < 2) continue;
    if (pastOf(c) !== w && pastParticipleOf(c) !== w && ingOf(c) !== w && third(c) !== w) continue;
    // A real verb's form only: "bed" is not "be" + d, "red" is not "re" + d, "need" and "weed" are their own verbs.
    if (/eed$/.test(w) && /ee$/.test(c) && c.length <= 3) continue;
    if (knownVerb(c)) found.push(c);
  }
  // Two verbs can share a form (putting: put or putt): the more common one wins.
  const rank = (c: string) => wordRank(c) ?? 9;
  return found.sort((a, b) => rank(a) - rank(b) || a.length - b.length)[0] ?? w;
}

// ---------- naming words and describing words ----------

const IRREGULAR_PLURALS: Record<string, string> = {
  child: 'children', person: 'people', man: 'men', woman: 'women', mouse: 'mice', louse: 'lice', foot: 'feet', tooth: 'teeth',
  goose: 'geese', ox: 'oxen', die: 'dice', sheep: 'sheep', deer: 'deer', fish: 'fish', moose: 'moose', series: 'series',
  species: 'species', aircraft: 'aircraft', cactus: 'cacti', fungus: 'fungi', octopus: 'octopuses', cattle: 'cattle',
  leaf: 'leaves', loaf: 'loaves', wolf: 'wolves', knife: 'knives', wife: 'wives', life: 'lives', half: 'halves', calf: 'calves',
  shelf: 'shelves', thief: 'thieves', elf: 'elves', self: 'selves', scarf: 'scarves', hoof: 'hooves', wharf: 'wharves',
  potato: 'potatoes', tomato: 'tomatoes', hero: 'heroes', echo: 'echoes', veto: 'vetoes', torpedo: 'torpedoes',
  volcano: 'volcanoes', mosquito: 'mosquitoes', domino: 'dominoes', tornado: 'tornadoes',
};
/** More than one: dog → dogs, box → boxes, baby → babies, child → children, leaf → leaves, snowman → snowmen. */
export function pluralOf(raw: string): string {
  const w = raw.toLowerCase();
  if (IRREGULAR_PLURALS[w]) return IRREGULAR_PLURALS[w];
  const compound = Object.keys(IRREGULAR_PLURALS).find((k) => k.length >= 3 && w.endsWith(k) && isWord(w.slice(0, -k.length)));
  if (compound) return w.slice(0, -compound.length) + IRREGULAR_PLURALS[compound];
  if (/[^aeiou]y$/.test(w)) return `${w.slice(0, -1)}ies`;
  if (/(s|x|z|ch|sh)$/.test(w)) return `${w}es`;
  return `${w}s`;
}

const IRREGULAR_COMPARE: Record<string, [string, string]> = {
  good: ['better', 'best'], well: ['better', 'best'], bad: ['worse', 'worst'], far: ['farther', 'farthest'],
  many: ['more', 'most'], much: ['more', 'most'], little: ['less', 'least'],
};
// Two-syllable describing words that take -er and -est.
const TWO_SYLLABLE_ER = new Set(['simple', 'gentle', 'quiet', 'narrow', 'clever', 'humble', 'noble', 'subtle', 'shallow', 'mellow', 'polite', 'common', 'handsome']);
/** More and most: big → bigger, biggest; happy → happier, happiest; good → better, best; careful → more, most careful. */
export function comparisonOf(raw: string): { more: string; most: string } {
  const w = raw.toLowerCase();
  if (IRREGULAR_COMPARE[w]) return { more: IRREGULAR_COMPARE[w][0], most: IRREGULAR_COMPARE[w][1] };
  const syllables = (w.match(/[aeiouy]+/g) ?? []).length - (/[^aeiouy]e$/.test(w) && !/le$/.test(w) ? 1 : 0);
  if (syllables <= 1 || (syllables === 2 && /[^aeiou]y$/.test(w)) || TWO_SYLLABLE_ER.has(w)) {
    const stem = /[^aeiou]y$/.test(w) ? `${w.slice(0, -1)}i` : /e$/.test(w) ? w.slice(0, -1) : syllables <= 1 && doublesLast(w) ? `${w}${w.slice(-1)}` : w;
    return { more: `${stem}er`, most: `${stem}est` };
  }
  return { more: `more ${w}`, most: `most ${w}` };
}
