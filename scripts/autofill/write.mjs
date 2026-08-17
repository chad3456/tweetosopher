/**
 * Writing: getting accepted entries into the repository.
 *
 * Generated entries go into their own file, `data/fallacies.generated.mjs`, rather than
 * being spliced into the hand-written `data/fallacies.mjs`. That is a deliberate
 * boundary and not squeamishness:
 *
 *   - Codegen that edits a hand-authored file will eventually mangle it. The
 *     hand-written prose in this repo is the most expensive thing in it.
 *   - A reviewer can read one diff and see exactly what a run added.
 *   - The corpus builder merges the two with hand-written winning on id collision, so
 *     an entry someone later writes properly silently supersedes the generated one.
 *   - Deleting the generated file reverts every run at once.
 *
 * The file is emitted whole each time from the full set, sorted by id, so the diff of a
 * run is exactly the entries it added and the output does not depend on run order.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

/** Wraps a long string into concatenated source lines, so the file stays readable. */
function wrap(text, indent = '      ', width = 92) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line && (line + ' ' + w).length > width) { lines.push(line); line = w; }
    else line = line ? `${line} ${w}` : w;
  }
  if (line) lines.push(line);
  return lines
    .map((l, i) => `${indent}${i === 0 ? '' : '+ '}${q(i === lines.length - 1 ? l : `${l} `)}`)
    .join('\n');
}

function renderEntry(e) {
  const aka = e.aka?.length ? `\n    aka: [${e.aka.map(q).join(', ')}],` : '';
  return `  {
    id: ${q(e.id)},
    name: ${q(e.name)},
    family: ${q(e.family)},${aka}
    definition:
${wrap(e.definition)},
    example:
${wrap(e.example)},
    notFallacy:
${wrap(e.notFallacy)},
    modern: {
      now:
${wrap(e.modern.now, '        ')},
      test:
${wrap(e.modern.test, '        ')},
    },
    generated: { by: ${q(e.generated.by)}, at: ${q(e.generated.at)}, source: ${q(e.generated.source)} },
  },`;
}

const HEADER = `/**
 * Generated fallacy entries. Do not hand-edit — \`npm run autofill\` rewrites this file
 * whole on every run, so an edit here is lost on the next one.
 *
 * To correct an entry, move it into \`data/fallacies.mjs\` and fix it there: the corpus
 * builder merges the two with the hand-written file winning on id collision, so a
 * hand-written entry permanently supersedes its generated version. To drop an entry,
 * delete it here and add its id to \`REJECTED\` in \`scripts/autofill/cli.mjs\` so a
 * later run does not re-add it.
 *
 * Every entry cleared the gate in \`scripts/autofill/gate.mjs\` — structure, originality
 * against fetched sources, distinctness from existing entries, house style, and the two
 * honesty checks. Clearing that gate is not the same as being right, and nothing here
 * has been read by a person unless its \`generated\` field says otherwise.
 */

export const GENERATED_FALLACIES = [
`;

/** Reads the existing generated set, so a run adds to it rather than replacing it. */
export async function readGenerated(path) {
  if (!existsSync(path)) return [];
  const mod = await import(`${path}?v=${Date.now()}`);
  return mod.GENERATED_FALLACIES ?? [];
}

export function writeGenerated(path, entries) {
  const sorted = [...entries].sort((a, b) => a.id.localeCompare(b.id));
  writeFileSync(path, `${HEADER}${sorted.map(renderEntry).join('\n')}\n];\n`);
  return sorted.length;
}

/** The run log. Append-only, so a scheduled job leaves an auditable trail. */
export function appendLog(path, record) {
  const line = `${JSON.stringify(record)}\n`;
  const prior = existsSync(path) ? readFileSync(path, 'utf8') : '';
  writeFileSync(path, prior + line);
}
