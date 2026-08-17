/**
 * Authoring: turns a candidate (a name and a family) into entry prose.
 *
 * This is the only part of the pipeline that calls a model, and it exists because the
 * alternative is copying someone else's writing (see `sources.mjs`). Structured outputs
 * do the schema enforcement, so the response is either a valid entry object or an
 * error — there is no string parsing and no repair pass.
 *
 * The model is `claude-opus-5`. Notes on the call shape, because several of these are
 * easy to get wrong:
 *
 *   - Thinking is on by default; there is no `thinking` field and no `budget_tokens`.
 *   - `temperature` / `top_p` are rejected outright, so tone comes from the prompt.
 *   - Streaming, because `max_tokens` is large enough that a non-streaming request
 *     risks an HTTP timeout.
 *   - `stop_reason: "refusal"` is a successful HTTP 200 with empty content. It is
 *     checked before the content is read, and `fallbacks: "default"` is declared so a
 *     declined request is retried server-side rather than lost.
 *
 * The system prompt is where the honesty rules live. They are not decoration: the whole
 * corpus is built on saying what a claim can and cannot support, and an authoring step
 * that quietly drops that produces entries that look right and are not.
 */

const MODEL = 'claude-opus-5';

/** The shape a fallacy entry must have. Enforced by the API, not by parsing. */
export const FALLACY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['definition', 'example', 'notFallacy', 'modern'],
  properties: {
    definition: { type: 'string', description: 'One sentence. What the move is. No hedging.' },
    example: {
      type: 'string',
      description:
        'A concrete instance, 1-3 sentences, showing the move being made. Invent the '
        + 'example; do not attribute it to a real named person.',
    },
    notFallacy: {
      type: 'string',
      description:
        'When this is NOT the fallacy — the legitimate version of the same move, or the '
        + 'common misuse of the accusation. 2-4 sentences. This field is the point of '
        + 'the entry and must never be filler.',
    },
    modern: {
      type: 'object',
      additionalProperties: false,
      required: ['now', 'test'],
      properties: {
        now: {
          type: 'string',
          description:
            'Where the move actually lives now and what has changed about how it '
            + 'operates: scale, incentives, the medium. 2-4 sentences. Must say '
            + 'something the definition does not.',
        },
        test: {
          type: 'string',
          description:
            'One question or check a reader can actually apply in the moment. '
            + '1-2 sentences.',
        },
      },
    },
  },
};

const SYSTEM = `You write entries for a reference on reasoning, argument and moral philosophy.

House rules, in order of importance:

1. Say what a claim can and cannot support. If a fallacy's name is more often used as an
   accusation than committed as an error — "that's a straw man", "correlation is not
   causation" — the entry says so, because teaching the label without that teaches a new
   way to lose an argument badly.
2. The "not a fallacy when" field is the most valuable part of every entry. The common
   failure of a fallacy reference is that a reader learns to name arguments rather than
   answer them. Ad hominem is not any criticism of a person; an appeal to authority is
   not any citation of an expert. Write the legitimate version precisely.
3. The modern reading must add information. Three things recur and are worth reaching
   for when they apply: scale changed the economics of producing bad argument; the
   audience changed, so moves that persuade nobody present became rational; and the
   medium changed, so quote-tweeting and clipping do some distortions automatically.
   Do not force all three into every entry.
4. Write British English, in plain declarative prose. No lists, no headings, no
   markdown, no rhetorical questions, no second-person exhortation. Concrete over
   abstract. Never begin with "In today's world" or similar.
5. Invent examples. Do not attribute a fallacy to a real named individual, and do not
   quote any source you cannot verify. No URLs.
6. Do not restate the definition in the other fields.`;

/**
 * @param {object} candidate  {id, name, family, aka}
 * @param {object} opts       {client, model, maxTokens, signal}
 * @returns {Promise<{entry: object, usage: object}>}
 */
export async function authorFallacy(candidate, { client, model = MODEL, maxTokens = 8000 } = {}) {
  if (!client) throw new Error('authorFallacy needs an Anthropic client');
  const aka = candidate.aka?.length ? ` Also called: ${candidate.aka.join(', ')}.` : '';

  const stream = client.beta.messages.stream({
    model,
    max_tokens: maxTokens,
    // Declared so a safety decline is retried server-side rather than dropping the
    // candidate. Routed by refusal category rather than a model we would have to
    // maintain a list of.
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: SYSTEM,
    output_config: { format: { type: 'json_schema', schema: FALLACY_SCHEMA } },
    messages: [{
      role: 'user',
      content:
        `Write the entry for the fallacy "${candidate.name}".${aka}\n`
        + `It belongs to the "${candidate.family}" family in this reference's taxonomy.\n\n`
        + 'If this name refers to more than one distinct move, write the one the name is '
        + 'most commonly used for and say in the definition that the term is used loosely.',
    }],
  });

  const message = await stream.finalMessage();

  // Checked before content is read: a refusal is a 200 with an empty content array, so
  // indexing into it blindly is how this fails at 3am.
  if (message.stop_reason === 'refusal') {
    const why = message.stop_details?.category ?? 'unspecified';
    throw Object.assign(new Error(`refused (${why})`), { refusal: true, candidate: candidate.id });
  }

  const block = message.content.find((b) => b.type === 'text');
  if (!block) throw new Error(`no text block for ${candidate.id} (stop_reason ${message.stop_reason})`);

  let entry;
  try {
    entry = JSON.parse(block.text);
  } catch {
    throw new Error(`${candidate.id}: structured output was not JSON`);
  }

  return {
    entry: {
      id: candidate.id,
      name: candidate.name,
      family: candidate.family,
      ...(candidate.aka?.length ? { aka: candidate.aka } : {}),
      definition: entry.definition,
      example: entry.example,
      notFallacy: entry.notFallacy,
      modern: entry.modern,
      // Provenance travels with the entry. A generated entry that cannot be told apart
      // from a hand-written one is a maintenance problem the first time one is wrong.
      generated: { by: model, at: new Date().toISOString().slice(0, 10), source: candidate.source },
    },
    usage: message.usage,
  };
}

/** Lazily constructed so `--dry-run` works with no key and no SDK installed. */
export async function makeClient() {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  // Zero-arg: resolves ANTHROPIC_API_KEY, then ANTHROPIC_AUTH_TOKEN, then an
  // `ant auth login` profile. Do not pass a key in from here.
  return new Anthropic();
}
