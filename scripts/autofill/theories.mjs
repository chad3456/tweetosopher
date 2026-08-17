/**
 * The theory arm: writing the registry's unwritten entries.
 *
 * The registry names all 372 entries the corpus plans; 82 have markdown files and the
 * rest are placeholders. This is the mechanism for the remainder, and it is the same
 * shape as the fallacy arm with two differences that matter:
 *
 *   Discovery is free. A candidate is simply a registry entry with no file on disk, so
 *   there is nothing to fetch and no source text to be careful with. The registry
 *   already carries the id, title, category, tradition, philosophers and era.
 *
 *   The gate is the repository's own validator. `scripts/validate-theories.mjs` is what
 *   the corpus already trusts — it enforces the closed axis vocabulary, the six required
 *   sections, the load-bearing-axis rule and the evidence rules from SCHEMA.md. Rather
 *   than reimplement any of that here, this writes the candidate file, runs the real
 *   validator over it, and deletes the file if it fails. A generated entry therefore
 *   clears exactly the same bar as a hand-written one, and it clears it against code
 *   that was not written to be lenient about generated prose.
 *
 * That second property is the whole reason this arm can run unattended. The fallacy
 * gate had to be built; this one already existed and has been enforcing the contract
 * across the corpus since the first batch.
 */

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = join(ROOT, 'theories');
const MODEL = 'claude-opus-5';

/** The axis vocabularies, restated so the schema can enforce them on the model. */
const FRAMEWORK = ['consequentialist', 'deontological', 'virtue', 'contractarian', 'care',
  'egoist', 'relativist', 'divine', 'existentialist', 'nihilist'];
const DISPOSITION = ['scope', 'agency', 'authority', 'certainty', 'affect'];

const scoreProps = Object.fromEntries([
  ...FRAMEWORK.map((k) => [k, { type: 'number', description: '0 to 1' }]),
  ...DISPOSITION.map((k) => [k, { type: 'number', description: '-1 to 1' }]),
]);

export const THEORY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['tags', 'sources', 'questions', 'outcomes', 'whatItMeans', 'whatItSuggests',
    'theProblem', 'readingYourAnswer', 'sourcesProse'],
  properties: {
    tags: {
      type: 'array',
      description: 'Two to five lowercase-hyphenated topic tags. These are what the theme '
        + 'matchers file the entry under, so use the vocabulary of the subject, not of the entry.',
      items: { type: 'string' },
    },
    sources: {
      type: 'array',
      description: 'One to four works. Bibliographic only — a url field is rejected by the '
        + 'build, because no link can be checked before this ships.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title'],
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          year: { type: 'string' },
          note: { type: 'string', description: 'Which part of the work bears on this entry.' },
        },
      },
    },
    whatItMeans: { type: 'string', description: 'Two to four paragraphs. What the idea is, in this corpus\'s voice.' },
    whatItSuggests: { type: 'string', description: 'One to three paragraphs. What follows if it is right.' },
    theProblem: { type: 'string', description: 'One to three paragraphs. The case that makes it hard. Concrete.' },
    readingYourAnswer: { type: 'string', description: 'One to two paragraphs. What the answer bands mean and what they cannot show.' },
    sourcesProse: { type: 'string', description: 'A short prose note on the sources. NO URLs.' },
    questions: {
      type: 'array',
      description: 'Exactly 4 questions, each with 3 or 4 options.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'prompt', 'options'],
        properties: {
          id: { type: 'string', description: 'q1, q2, q3, q4' },
          prompt: { type: 'string' },
          options: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['id', 'label', 'scores'],
              properties: {
                id: { type: 'string', description: 'a, b, c, d' },
                label: { type: 'string' },
                scores: { type: 'object', additionalProperties: false, properties: scoreProps },
                evidence: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['who', 'says'],
                  properties: {
                    who: { type: 'string', description: 'A named thinker who held this.' },
                    says: { type: 'string', description: 'Their position in our words. Never a quotation.' },
                  },
                },
              },
            },
          },
        },
      },
    },
    outcomes: {
      type: 'array',
      description:
        'One band per framework axis that any option scores at 0.5 or above. This is the '
        + 'load-bearing-axis rule and the validator enforces it.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'dominant', 'label', 'text'],
        properties: {
          id: { type: 'string' },
          dominant: { type: 'string', enum: FRAMEWORK },
          label: { type: 'string', description: 'A short name for the position, not a grade.' },
          text: { type: 'string', description: 'Two to four sentences addressed to the reader who landed here.' },
        },
      },
    },
  },
};

const SYSTEM = `You write entries for a corpus of moral philosophy that is executed as a test.

Each entry is a real argument a real thinker built to make something hard, plus the
question set that tests where a reader stands on it. The prose explains; the questions
and score vectors are the instrument.

Rules, in order of importance:

1. Scores are the mechanism, not decoration. Use the closed vocabulary only. A framework
   axis runs 0 to 1 and means "how much does this option express that framework"; a
   disposition axis runs -1 to 1. Score only the axes an option actually expresses —
   two to four per option, not all fifteen.
2. THE LOAD-BEARING AXIS RULE: for every framework axis that any option scores at 0.5 or
   above, there must be an outcome band whose \`dominant\` is that axis. A reader who
   answers that way must have somewhere to land. The build rejects an entry that breaks
   this, so check it before you finish.
3. Options must be genuinely defensible positions, not one right answer and three
   strawmen. Where you can, attach \`evidence\` naming a thinker who held that position
   and stating it in your own words. Never quote — a quotation you cannot verify is a
   fabrication, and no source can be checked before this ships.
4. NO URLs anywhere, in any field. Sources are structured bibliographic entries — title,
   author, year, and a note on which part of the work bears on this entry. The build
   rejects a source carrying a url, because no link can be verified before this ships.
   Cite only works you are confident exist; never invent a title or a page number.
5. The problem section must be concrete: a case, a consequence, a cost. Not "critics
   have raised concerns".
6. \`readingYourAnswer\` must say what the result cannot show as well as what it can. Four
   questions is a short instrument and the entry says so.
7. British English, plain declarative prose, no markdown inside the fields, no
   second-person exhortation, no rhetorical questions.`;

/** Registry entries with no file on disk. Discovery, for this arm, is a directory listing. */
export function unwritten({ limit = Infinity } = {}) {
  const registry = JSON.parse(readFileSync(join(DIR, '_registry.json'), 'utf8'));
  return registry.entries
    .filter((e) => !existsSync(join(DIR, `${e.id}.md`)))
    .slice(0, limit);
}

const yamlString = (s) => JSON.stringify(String(s));

/** Renders the authored object as the markdown-with-front-matter the corpus expects. */
export function renderTheory(meta, body) {
  const lines = ['---'];
  lines.push(`id: ${meta.id}`);
  lines.push(`title: ${yamlString(meta.title)}`);
  lines.push(`category: ${meta.category}`);
  lines.push(`tradition: ${meta.tradition}`);
  lines.push('philosophers:');
  for (const p of meta.philosophers) lines.push(`  - ${yamlString(p)}`);
  lines.push(`era: ${yamlString(meta.era)}`);
  lines.push('tags:');
  for (const t of body.tags) lines.push(`  - ${yamlString(t)}`);
  lines.push('sources:');
  for (const src of body.sources) {
    lines.push(`  - title: ${yamlString(src.title)}`);
    if (src.author) lines.push(`    author: ${yamlString(src.author)}`);
    if (src.year) lines.push(`    year: ${yamlString(src.year)}`);
    if (src.note) lines.push(`    note: ${yamlString(src.note)}`);
  }
  lines.push('questions:');
  for (const q of body.questions) {
    lines.push(`  - id: ${q.id}`);
    lines.push(`    prompt: ${yamlString(q.prompt)}`);
    lines.push('    options:');
    for (const o of q.options) {
      lines.push(`      - id: ${o.id}`);
      lines.push(`        label: ${yamlString(o.label)}`);
      lines.push('        scores:');
      for (const [k, v] of Object.entries(o.scores)) lines.push(`          ${k}: ${v}`);
      if (o.evidence) {
        lines.push('        evidence:');
        lines.push(`          who: ${yamlString(o.evidence.who)}`);
        lines.push(`          says: ${yamlString(o.evidence.says)}`);
      }
    }
  }
  lines.push('outcomes:');
  for (const o of body.outcomes) {
    lines.push(`  - id: ${o.id}`);
    lines.push(`    dominant: ${o.dominant}`);
    lines.push(`    label: ${yamlString(o.label)}`);
    lines.push(`    text: ${yamlString(o.text)}`);
  }
  lines.push('---', '');
  lines.push('## What it means', '', body.whatItMeans.trim(), '');
  lines.push('## What it suggests', '', body.whatItSuggests.trim(), '');
  lines.push('## The problem', '', body.theProblem.trim(), '');
  lines.push('## The questions', '');
  lines.push(
    'The four questions in the front matter above are the instrument. Each option carries '
    + 'a score vector over the corpus axes, and the bands below are what those vectors '
    + 'resolve to.',
    '',
  );
  lines.push('## Reading your answer', '', body.readingYourAnswer.trim(), '');
  lines.push('## Sources', '', body.sourcesProse.trim(), '');
  return lines.join('\n');
}

export async function authorTheory(meta, { client, model = MODEL, maxTokens = 16000 } = {}) {
  if (!client) throw new Error('authorTheory needs an Anthropic client');
  const stream = client.beta.messages.stream({
    model,
    max_tokens: maxTokens,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: SYSTEM,
    output_config: { format: { type: 'json_schema', schema: THEORY_SCHEMA } },
    messages: [{
      role: 'user',
      content:
        `Write the corpus entry for "${meta.title}".\n`
        + `id: ${meta.id}\ncategory: ${meta.category}\ntradition: ${meta.tradition}\n`
        + `associated with: ${meta.philosophers.join(', ')}\nera: ${meta.era}\n\n`
        + 'Four questions, three or four options each. Remember the load-bearing axis rule.',
    }],
  });

  const message = await stream.finalMessage();
  if (message.stop_reason === 'refusal') {
    const why = message.stop_details?.category ?? 'unspecified';
    throw Object.assign(new Error(`refused (${why})`), { refusal: true, candidate: meta.id });
  }
  const block = message.content.find((b) => b.type === 'text');
  if (!block) throw new Error(`no text block for ${meta.id} (stop_reason ${message.stop_reason})`);
  return { body: JSON.parse(block.text), usage: message.usage };
}

/**
 * Writes the file, runs the repository's own validator over it, and deletes it again if
 * the validator objects. The generated entry clears the same bar as a hand-written one
 * because it is checked by the same code — there is no separate, more forgiving path.
 *
 * `--batch` scopes the validator to one slice so a run does not fail on pre-existing
 * problems elsewhere in the corpus.
 */
export function writeAndValidate(meta, body, { keep = true } = {}) {
  const path = join(DIR, `${meta.id}.md`);
  if (existsSync(path)) return { ok: false, reasons: ['file already exists'] };
  writeFileSync(path, renderTheory(meta, body));
  try {
    execFileSync('node', [join(ROOT, 'scripts', 'validate-theories.mjs'), '--batch', String(meta.batch)], {
      cwd: ROOT, stdio: 'pipe', encoding: 'utf8',
    });
    if (!keep) unlinkSync(path);
    return { ok: true, reasons: [], path };
  } catch (err) {
    const out = `${err.stdout ?? ''}${err.stderr ?? ''}`;
    // Only this entry's problems matter; another batch member may be independently broken.
    const mine = out.split('\n').filter((l) => l.includes(meta.id)).map((l) => l.trim());
    unlinkSync(path);
    return { ok: false, reasons: mine.length ? mine : ['validator rejected the batch'] };
  }
}
