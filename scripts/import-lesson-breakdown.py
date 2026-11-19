"""Her Lesson Breakdown (Units 1-8 and Compositions, PDF) -> src/writer/lessonBreakdown.ts.
Run: python3 scripts/import-lesson-breakdown.py docs/source/Symbolic_Grammar_Lesson_Breakdown.pdf"""
import json, re, sys
import pdfplumber

with pdfplumber.open(sys.argv[1]) as pdf:
    lines = [l.strip() for pg in pdf.pages for l in (pg.extract_text() or '').splitlines() if l.strip()]

GROUPS = {'Procedures for every composition', 'Messages', 'Paragraphs', 'How-to article (directions)', 'Descriptive writing',
          'Writing about feelings', 'Interview and research questions', 'Narrative and personal narrative', 'Report and research',
          'Opinion and argument', 'Essay', 'Craft strategies', 'Creative writing'}

def levels_of(text, default):
    m = re.search(r'\((A|B|C)(?:,\s*(A|B|C))*\)', text)
    if not m: return default
    return re.findall(r'[ABC]', m.group(0))

def clean(text):
    return re.sub(r'\s*\((?:A|B|C)(?:,\s*(?:A|B|C))*\)', '', text).strip()

units, unit, lesson, skill = [], None, None, None
in_comp = False
for l in lines:
    if l.startswith('Symbolic Grammar: Lesson Breakdown') or l == 'Compositions' or l.startswith('Units 1') or l.startswith('formulas.') or l.startswith('learners choose') or l.startswith('Assume all') or l.startswith('Formulas.') or l.startswith('their own.'):
        continue
    m = re.match(r'^Unit (\d+): (.+)$', l)
    if m:
        unit = {'id': m.group(1), 'title': m.group(2), 'composition': '', 'lessons': []}; units.append(unit); lesson = skill = None; continue
    m = re.match(r'^Unit \d+ composition: (.+)$', l)
    if m and unit: unit['composition'] = m.group(1); continue
    if l.startswith('Compositions: '):
        in_comp = True
        unit = {'id': 'C', 'title': 'Compositions', 'composition': '', 'lessons': []}; units.append(unit); lesson = skill = None; continue
    if in_comp and (l.startswith('Not a unit.') or l.startswith('composition uses')):
        continue
    if ' · ' in l:
        code, example = [x.strip() for x in l.split(' · ', 1)]
        lv = levels_of(code, (skill or lesson or {}).get('levels', ['A', 'B', 'C']))
        code = clean(code)
        note = ''
        mm = re.match(r'^(.*?)\s*\(([^)]*)\)$', code)
        if mm: code, note = mm.group(1).strip(), mm.group(2).strip()
        target = skill or lesson
        if target is None:
            lesson = {'id': '', 'title': '', 'levels': ['A', 'B', 'C'], 'skills': []}; unit['lessons'].append(lesson); target = lesson
        if target is lesson and 'skills' in target:
            skill = {'id': lesson['id'], 'title': lesson['title'], 'levels': lesson['levels'], 'formulas': []}; lesson['skills'].append(skill); target = skill
        target['formulas'].append({'code': code.replace('*', ''), 'example': example, 'levels': lv, 'working': '*' in code, 'note': note})
        continue
    if not in_comp:
        m = re.match(r'^(\d+\.\d+\.\d+[A-Z]?)\s+(.+)$', l)
        if m and lesson is not None:
            skill = {'id': m.group(1), 'title': clean(m.group(2)), 'levels': levels_of(m.group(2), lesson['levels']), 'formulas': []}; lesson['skills'].append(skill); continue
        m = re.match(r'^(\d+\.\d+[A-Z]?)\s+(.+)$', l)
        if m and unit is not None:
            lesson = {'id': m.group(1), 'title': clean(m.group(2)), 'levels': levels_of(m.group(2), ['A', 'B', 'C']), 'skills': []}; unit['lessons'].append(lesson); skill = None; continue
    else:
        if l in GROUPS:
            lesson = {'id': '', 'title': l, 'levels': ['A', 'B', 'C'], 'skills': []}; unit['lessons'].append(lesson); skill = None; continue
        if lesson is not None:
            skill = {'id': '', 'title': clean(l), 'levels': levels_of(l, ['A', 'B', 'C']), 'formulas': []}; lesson['skills'].append(skill); continue

n = sum(len(s['formulas']) for u in units for le in u['lessons'] for s in le['skills'])
out = open('src/writer/lessonBreakdown.ts', 'w')
out.write('// Her Lesson Breakdown, Units 1-8 and Compositions (the most current version, 2026-11-19), imported by\n')
out.write('// scripts/import-lesson-breakdown.py. Each skill lists the formula set taught together, as her formula code and its\n')
out.write('// example sentence. "working" marks a code she has not added to Sentence Formulas yet. Do not edit by hand: re-run.\n')
out.write('export interface BreakdownFormula { code: string; example: string; levels: string[]; working: boolean; note: string }\n')
out.write('export interface BreakdownSkill { id: string; title: string; levels: string[]; formulas: BreakdownFormula[] }\n')
out.write('export interface BreakdownLesson { id: string; title: string; levels: string[]; skills: BreakdownSkill[] }\n')
out.write('export interface BreakdownUnit { id: string; title: string; composition: string; lessons: BreakdownLesson[] }\n')
out.write('export const LESSON_BREAKDOWN: BreakdownUnit[] = ' + json.dumps(units, indent=1, ensure_ascii=False) + ';\n')
out.close()
print(len(units), 'units,', n, 'formulas')
