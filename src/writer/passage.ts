// Reading a whole passage by its structure before its sentences (her rule 2026-11-20: "learning is taught as a structure
// before it is taught as an art"). Every line of a passage gets a line type first: a title, a header, a list item, a
// label or caption, a greeting or closing, a source credit, or sentences. Only sentences get a formula code. Inside
// sentences, dialogue (words in quotation marks) and informal speech (her term, 2026-11-20) are marked, and a group of
// words that is missing its subject or its verb is a fragment. Nothing is thrown away: every line is kept and counted.

import { checkSentence, splitSentences, tagForCheck } from './sentenceCheck';
import { formulaCode, sentenceSlots, cardSlotsOf } from './formulaMatch';

export type LineType =
  | 'title' | 'header' | 'list item' | 'label' | 'greeting' | 'closing' | 'source credit' | 'sentence' | 'fragment';

// What each line type is, in her plain words (shown in Formula Search).
export const LINE_TYPE_INFO: Record<LineType, { name: string; about: string; formula: boolean }> = {
  title: { name: 'Title', about: 'Names the whole piece. Not a sentence.', formula: false },
  header: { name: 'Header', about: 'Names a section. Not a sentence.', formula: false },
  'list item': { name: 'List item', about: 'One item in a list.', formula: false },
  label: { name: 'Label or caption', about: 'A few words that name or tell about a picture or a part. Not a sentence.', formula: false },
  greeting: { name: 'Greeting', about: 'Opens a message (Dear Sam,).', formula: false },
  closing: { name: 'Closing', about: 'Ends a message (Sincerely,).', formula: false },
  'source credit': { name: 'Source credit', about: 'Says who wrote it or where it came from.', formula: false },
  sentence: { name: 'Sentence', about: 'A complete sentence: it has a subject and a verb.', formula: true },
  fragment: { name: 'Fragment', about: 'Words that end like a sentence but are missing a subject or a verb.', formula: false },
};

export interface PassageItem {
  line: number;          // which line of the passage (from 1)
  type: LineType;
  text: string;
  job?: 'S' | 'Q' | 'C' | 'E' | 'I'; // statement, question, command, exclamation, interjection (sentences only)
  code?: string;         // formula code (sentences and fragments)
  slots?: string[];
  family?: string[];     // the code and every shorter code it grows from: S, S1, S1.A, S1.A.J
  dialogue: boolean;     // in quotation marks, or the line is someone talking
  informal: boolean;     // informal speech: talk written the way people say it
  missing?: 'who' | 'action' | null;
}

const LIST_MARK = /^\s*(?:[-*•▪◦–]|\d{1,3}[.)]|[a-zA-Z][.)])\s+/;
const GREETING = /^(dear|hi|hello|hey|to whom it may concern|good (morning|afternoon|evening))\b[^.!?]{0,40}[,:!]?$/i;
const CLOSING = /^(sincerely|love|thanks|thank you|best|best wishes|regards|kind regards|warmly|yours( truly)?|cheers|see you( soon)?|take care|from)\b[^.!?]{0,30}[,!.]?$/i;
const CREDIT = /^(by|source|photo|image|credit|adapted from|from the|written by|illustrated by|retold by|translated by)\b[:\s]|^[—–-]\s*[A-Z]|^(chapter|part|section|unit|lesson)\s+[\divxlc]+\b/i;
// Informal speech: words written the way people say them (her term, 2026-11-20). Marked, never scored as wrong.
const INFORMAL = /\b(gonna|wanna|gotta|kinda|sorta|lemme|gimme|dunno|ain't|y'all|ya|yeah|yep|nope|nah|ok|okay|'cause|cuz|'em|outta|lotta|hafta|wassup|whatcha|gotcha)\b|\b\w+in'(?=\W|$)/i;
const QUOTED = /["“]([^"”]+)["”]/g;

// The shorter codes a formula code grows from (her decision tree: job, core, add-ons). "S1.A.J.B" gives S, S1, S1.A,
// S1.A.J, S1.A.J.B, so a long sentence also counts toward the short formulas it is built on. A code with joined parts
// ((X)C(Y), C[X],(Y), B,S1.A) gives its job and core and the whole code.
export function formulaFamily(code: string): string[] {
  if (!code) return [];
  const simple = /^([A-Z][a-z]?n?)(\d)((?:\.[A-Za-z']+)*)$/.exec(code);
  if (simple) {
    const out = [simple[1], simple[1] + simple[2]];
    const adds = simple[3].split('.').filter(Boolean);
    for (let i = 1; i <= adds.length; i++) out.push(`${simple[1]}${simple[2]}.${adds.slice(0, i).join('.')}`);
    return [...new Set(out)];
  }
  const core = /([A-Z][a-z]?n?)(\d)/.exec(code);
  return core ? [...new Set([core[1], core[1] + core[2], code])] : [code];
}

const jobOf = (code: string): PassageItem['job'] => {
  const m = /([SQCEI])n?\d?/.exec(code.replace(/^(B|PRP|PN),/, ''));
  return (m?.[1] as PassageItem['job']) ?? undefined;
};

const isTitleCase = (t: string) => {
  const words = t.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  if (!words.length) return false;
  const small = /^(a|an|the|and|or|but|of|in|on|at|to|for|by|with|from|as|is)$/i;
  return words.every((w, i) => (i > 0 && small.test(w)) || /^[^a-z]*[A-Z0-9]/.test(w));
};

// One line that is not a list item, greeting, closing or credit: is it a title, header or label, or sentences?
function shortLineType(t: string, first: boolean, nextIsText: boolean): LineType | null {
  const words = t.split(/\s+/).filter(Boolean).length;
  const ended = /[.!?]["'”’)]*$/.test(t);
  if (/^#{1,6}\s/.test(t)) return first ? 'title' : 'header';
  if (/:$/.test(t) && words <= 8) return 'header';
  if (ended) return null;
  if (words <= 12 && (isTitleCase(t) || t === t.toUpperCase())) return first ? 'title' : nextIsText ? 'header' : 'label';
  if (words <= 6) return first ? 'title' : 'label';
  return null;
}

// The whole passage, line by line, in order. A line of sentences becomes one item per sentence.
export function readPassage(text: string): PassageItem[] {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const out: PassageItem[] = [];
  let seenText = false;
  lines.forEach((raw, k) => {
    const t = raw.trim();
    if (!t) return;
    const line = k + 1;
    const nextIsText = lines.slice(k + 1).some((l) => l.trim().length > 0);
    const base = { line, dialogue: false, informal: false };
    const informal = INFORMAL.test(t);
    if (LIST_MARK.test(t)) { out.push({ ...base, type: 'list item', text: t.replace(LIST_MARK, ''), informal }); seenText = true; return; }
    if (GREETING.test(t) && t.split(/\s+/).length <= 7) { out.push({ ...base, type: 'greeting', text: t }); seenText = true; return; }
    if (CLOSING.test(t) && t.split(/\s+/).length <= 6) { out.push({ ...base, type: 'closing', text: t }); seenText = true; return; }
    if (CREDIT.test(t) && t.split(/\s+/).length <= 14) { out.push({ ...base, type: 'source credit', text: t }); seenText = true; return; }
    const short = shortLineType(t.replace(/^#{1,6}\s/, ''), !seenText, nextIsText);
    if (short) { out.push({ ...base, type: short, text: t.replace(/^#{1,6}\s/, ''), informal }); seenText = true; return; }
    seenText = true;
    // A line that starts with a dash and no quotation marks is someone talking, in some books.
    const talkingLine = /^[—–]\s*\S/.test(t) && !/["“]/.test(t);
    for (const span of joinSaid(splitSentences(t), t)) out.push(readSentence(span, line, talkingLine));
  });
  return out;
}

// "What a lovely bird!" said the fox. is one sentence: a quote that ends with ! or ? and goes on in lowercase.
function joinSaid(spans: ReturnType<typeof splitSentences>, line: string): ReturnType<typeof splitSentences> {
  const out: ReturnType<typeof splitSentences> = [];
  for (const s of spans) {
    const prev = out[out.length - 1];
    if (prev && /^["”’']?\s*[a-z]/.test(s.text) && /[!?]["”’']?$/.test(prev.text)) {
      prev.end = s.end; prev.text = line.slice(prev.start, s.end); prev.ended = s.ended;
    } else out.push({ ...s });
  }
  return out;
}

function readSentence(span: ReturnType<typeof splitSentences>[number], line: number, talkingLine: boolean): PassageItem {
  const text = span.text;
  const quotes = [...text.matchAll(QUOTED)].map((m) => m[1]);
  const dialogue = talkingLine || quotes.length > 0 || /^["“]/.test(text);
  const informal = INFORMAL.test(text);
  const words = tagForCheck(text);
  const mine = sentenceSlots(words, text);
  const code = mine.length ? formulaCode(mine, text) : '';
  const check = checkSentence(span);
  // A one-word exclamation (Wow!) is complete. Quoted speech inside narration is judged by the whole sentence.
  const fragment = !check.complete && code !== 'I';
  return {
    line, type: fragment ? 'fragment' : 'sentence', text, job: code ? jobOf(code) : undefined, code,
    slots: mine.length ? cardSlotsOf(mine) : [], family: formulaFamily(code), dialogue, informal,
    missing: fragment ? check.missing : null,
  };
}
