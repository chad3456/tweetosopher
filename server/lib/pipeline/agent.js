import Anthropic from '@anthropic-ai/sdk';
import { hasCredentials } from '../engine.js';
import { planStore, validatePlan, fingerprint } from './plans.js';

/**
 * The repair agent.
 *
 * Substack's JSON endpoints are undocumented and change without notice. The
 * deterministic extractors in this pipeline encode what those endpoints looked
 * like at the time of writing; when reality stops matching, something has to
 * work out where the title went.
 *
 * That is the job this agent does, and the *only* job. It is not in the hot
 * path:
 *
 *   1. A stage runs its built-in plan. If it validates, the agent never wakes.
 *   2. If it fails, the agent is shown a truncated sample of the real payload
 *      and asked for a new plan — a map of field names to candidate paths.
 *   3. The plan is validated against the payload before it is trusted, then
 *      cached under a fingerprint of the payload's shape.
 *
 * So the cost is one call the first time an endpoint changes, and zero calls
 * thereafter until it changes again. A run is also capped, so a genuinely
 * broken endpoint cannot turn one scrape into a dozen model calls.
 *
 * The agent returns paths, never code — see the note at the top of plans.js.
 */

const MODEL = process.env.TWEETOSOPHER_MODEL || 'claude-opus-5';
const MAX_REPAIRS_PER_RUN = 3;

let client;
const getClient = () => (client ??= new Anthropic());

export const agentAvailable = () => hasCredentials();

/**
 * Shrink a payload to something worth spending tokens on.
 *
 * Two long strings and a hundred records tell the agent nothing that two
 * records and a truncated string do not. Preserving *keys* matters; preserving
 * *content* does not.
 */
export function summarize(node, depth = 0) {
  if (node === null || node === undefined) return node;

  if (typeof node === 'string') {
    return node.length > 180 ? `${node.slice(0, 180)}…[${node.length} chars]` : node;
  }
  if (typeof node !== 'object') return node;

  if (Array.isArray(node)) {
    if (depth > 5) return `[array of ${node.length}]`;
    const head = node.slice(0, 2).map((v) => summarize(v, depth + 1));
    return node.length > 2 ? [...head, `…${node.length - 2} more`] : head;
  }

  if (depth > 5) return '{…}';
  const out = {};
  for (const [k, v] of Object.entries(node).slice(0, 60)) {
    out[k] = summarize(v, depth + 1);
  }
  return out;
}

const SYSTEM = `You repair data extraction for a scraper that reads public Substack posts.

You are given a JSON payload from an endpoint whose shape has changed, and a list of fields the scraper needs. You return a PLAN: for each field, an ordered list of candidate paths into a single record.

Path syntax is dotted, with numeric segments indexing arrays: "title", "comment.body", "body_json.content.0.text".

Rules:
- "list" is the path to the array of records. Use "" when the payload IS the array. Use null when the payload is a single record rather than a list.
- All field paths are relative to ONE RECORD, not to the whole payload.
- Order candidates best-first. A field may legitimately have several sources (a full body, a truncated body, a summary); list them in descending order of richness.
- Prefer fields containing real content over ids, slugs and booleans.
- For a text field, prefer the longest human-readable prose available. HTML is fine — the caller strips tags.
- If a field genuinely has no source in this payload, return an empty candidate list for it rather than inventing a path.
- Paths must exist in the payload you were shown. Do not guess at fields you cannot see.

The payload has been truncated for you: long strings are cut and marked, and arrays show only their first two entries. Truncation is a display artifact — the real values are complete, so judge a field by its key and its sample, not by its length.`;

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['list', 'fields', 'notes'],
  properties: {
    list: {
      type: ['string', 'null'],
      description: 'Dotted path to the record array, "" if the payload is the array, null if it is a single record.',
    },
    fields: {
      type: 'array',
      description: 'One entry per requested field.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'candidates'],
        properties: {
          name: { type: 'string' },
          candidates: {
            type: 'array',
            description: 'Ordered dotted paths, best first. Empty if unavailable.',
            items: { type: 'string' },
          },
        },
      },
    },
    notes: {
      type: 'string',
      description: 'One sentence on what changed, for the operator log.',
    },
  },
};

/**
 * Ask the agent for a plan, validate it, and cache it on success.
 *
 * @returns {Promise<{plan: object, notes: string} | null>} null when the agent
 *   is unavailable, capped out, or produced a plan that did not validate.
 */
export async function repairPlan({
  endpoint,
  host,
  payload,
  fields,
  failure,
  required = ['title', 'text'],
  budget,
  onProgress,
}) {
  if (!agentAvailable()) return null;
  if (budget && budget.used >= MAX_REPAIRS_PER_RUN) return null;

  const key = planStore.key(host, endpoint, payload);
  const cached = planStore.get(key);
  if (cached) {
    const check = validatePlan(payload, cached, required);
    if (check.ok) return { plan: cached, notes: 'reused a cached repair', cached: true };
    // A cached plan that no longer validates is worse than none.
    planStore.set(key, null);
  }

  if (budget) budget.used++;
  onProgress?.({
    stage: 'repair',
    message: `Extraction for "${endpoint}" did not match — asking the agent to remap it.`,
  });

  const prompt = [
    `ENDPOINT: ${endpoint}`,
    `HOST: ${host}`,
    `PAYLOAD SHAPE: ${fingerprint(payload)}`,
    `WHY THE CURRENT PLAN FAILED: ${failure}`,
    '',
    'FIELDS REQUIRED (name — what it means):',
    ...fields.map((f) => `- ${f.name} — ${f.description}`),
    '',
    'REQUIRED-TO-BE-NON-EMPTY: ' + required.join(', '),
    '',
    'TRUNCATED PAYLOAD:',
    JSON.stringify(summarize(payload), null, 1).slice(0, 24_000),
  ].join('\n');

  let message;
  try {
    message = await getClient().messages.create({
      model: MODEL,
      max_tokens: 4000,
      // Structural mapping, not judgement — and this is a fallback path that
      // should stay cheap. `medium` is the right rung here even though the
      // panel itself runs at `high`.
      output_config: { effort: 'medium', format: { type: 'json_schema', schema: SCHEMA } },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: prompt }],
    });
  } catch (err) {
    onProgress?.({ stage: 'repair', message: `Repair agent unavailable: ${err.message}` });
    return null;
  }

  if (message.stop_reason === 'refusal') {
    onProgress?.({ stage: 'repair', message: 'Repair agent declined this payload.' });
    return null;
  }

  const text = message.content.find((b) => b.type === 'text')?.text;
  if (!text) return null;

  let proposal;
  try {
    proposal = JSON.parse(text);
  } catch {
    return null;
  }

  const plan = {
    list: proposal.list,
    fields: Object.fromEntries(
      (proposal.fields ?? [])
        .filter((f) => f?.name && Array.isArray(f.candidates))
        .map((f) => [f.name, f.candidates.filter((c) => typeof c === 'string')]),
    ),
  };

  const check = validatePlan(payload, plan, required);
  if (!check.ok) {
    onProgress?.({
      stage: 'repair',
      message: `Proposed plan rejected: ${check.reason}`,
    });
    return null;
  }

  planStore.set(key, plan);
  onProgress?.({
    stage: 'repair',
    message: `Remapped "${endpoint}" — ${proposal.notes ?? 'plan accepted'} (${check.records} records).`,
  });

  return { plan, notes: proposal.notes ?? '', cached: false };
}

/** Fresh per-run budget, so one scrape can never fan out into many calls. */
export const newBudget = () => ({ used: 0, max: MAX_REPAIRS_PER_RUN });
