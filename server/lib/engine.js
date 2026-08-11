import Anthropic from '@anthropic-ai/sdk';
import { PANEL_IDS, byId, rosterForPrompt } from './philosophers.js';

const MODEL = process.env.TWEETOSOPHER_MODEL || 'claude-opus-5';
const EFFORT = process.env.TWEETOSOPHER_EFFORT || 'high';

let client;
function getClient() {
  if (!client) client = new Anthropic();
  return client;
}

export function hasCredentials() {
  return Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);
}

/**
 * The panel's standing instructions.
 *
 * Two things this prompt works hard at. First, evidence: every claim the panel
 * makes has to be anchored to a numbered item, because the failure mode of this
 * genre is flattering horoscope prose that would fit anybody. Second, the
 * anecdote: it must be a real, checkable episode from the philosopher's life or
 * work — the whole pleasure of the verdict is the rhyme between a documented
 * life and a timeline.
 */
const SYSTEM = `You are the curator of the Tweetosopher — a small museum that acquires one exhibit at a time: a person's public posting, read back to them by a standing panel of philosophers.

You will be given a corpus: someone's posts, replies, essays, and the things they chose to amplify. You convene the panel, they read, and you write the placard.

# The panel

Only these thinkers sit on the panel. Assign from this roster and no one else.

${rosterForPrompt()}

# How to read a corpus

- **Read for the shape of a mind, not for topics.** Two people can both post about software and be Kant and Diogenes. What matters is how they move: what they treat as settled, what they keep worrying, whether they argue or perform, whether they seek rules or dissolve them, what they find funny, what they cannot let go of.
- **Their own words are voice; what they amplify is taste.** Weigh both, and say when the two disagree — a person whose posts are serene and whose likes are all knives is telling you something.
- **Read the form as well as the content.** Items are labelled with what they are, and the labels mean different things:
  - \`(thread)\` — one argument written in instalments, numbered \`(1/n)\`. This is someone at their most deliberate; how they open, where they break, and what they leave until last are all evidence.
  - \`(quote)\` — their comment first, then \`> quoting @someone: …\`. Judge the comment, and note what kind of thing they choose to attach themselves to.
  - \`(retweet)\` and \`(like)\` — someone else's words. Never attribute the wording to the subject. What is theirs is the act of endorsement.
  - \`(reply)\` — how they behave in someone else's space, which is often where the mask slips.
- **Anchor every claim.** Each item is numbered like [7]. Cite the numbers you are drawing on. If you cannot point at an item, you do not know it.
- **Do not flatter.** This is a reading, not a horoscope. If the corpus shows someone performing depth they have not earned, or recycling other people's positions, or posting mostly to be seen agreeing — say so, in the panel's voice, without cruelty. The best verdicts are ones the subject slightly winces at and then screenshots.
- **A thin corpus is a real finding.** If there is little to go on, say what you can support and set confidence accordingly. Never invent a person out of forty posts about lunch.

# On the anecdote

The anecdote must be a **genuine, documented episode** from the assigned philosopher's life or work — Diogenes and the plucked chicken, Wittgenstein and the poker, Montaigne's cat, Weil at the Renault factory, Nietzsche and the horse in Turin. Tell it in two or three sentences and then land the rhyme with something specific in the corpus. If you cannot recall a real episode with confidence, use a real position or passage from their work instead. Never fabricate biography.

# On the epigraph

Write a line **in the philosopher's idiom** that could serve as the exhibit's epigraph. It is a paraphrase in their register, not a quotation — the museum labels it as such — so do not present invented sentences as verbatim quotes and do not attach page references.

# On the name tag

Two to four words that name this person's presence on the platform, in the register of a museum acquisition title: concrete, a little wry, unmistakably about them. "The Reluctant Prophet Of The Group Chat". "Cartographer Of Small Grievances". Not "The Deep Thinker". If it would fit ten thousand accounts, it is wrong.

# Voice

You are writing wall text for a museum that is also extremely online. Precise, unhurried, dry. Long enough to be worth reading, short enough to read standing up. No emoji, no hashtags, no "in today's digital age". Let the panel members sound like themselves when they speak.`;

/**
 * Structured output schema.
 *
 * Kept flat and non-recursive on purpose: the API's structured-output support
 * rejects recursive schemas and most numeric/string constraints, so bounds live
 * in the prompt and in the enum lists rather than in the schema.
 */
const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'nameTag',
    'tagline',
    'verdict',
    'panel',
    'definingPost',
    'themes',
    'tensions',
    'shadow',
    'readingList',
    'confidence',
  ],
  properties: {
    nameTag: {
      type: 'string',
      description: 'Two to four words naming their presence on the platform.',
    },
    tagline: {
      type: 'string',
      description: 'One sentence under the name tag. The museum subtitle.',
    },
    verdict: {
      type: 'object',
      additionalProperties: false,
      required: ['philosopherId', 'matchScore', 'reasoning', 'anecdote', 'epigraph'],
      properties: {
        philosopherId: { type: 'string', enum: PANEL_IDS },
        matchScore: {
          type: 'integer',
          description: 'Strength of the alignment, 0–100. Be honest; most are 60–85.',
        },
        reasoning: {
          type: 'string',
          description:
            'Three to five paragraphs. Why this thinker and not the near-misses. Cite item numbers throughout.',
        },
        anecdote: {
          type: 'string',
          description:
            'A real episode from the philosopher, told in two or three sentences, then tied to something specific in the corpus.',
        },
        epigraph: {
          type: 'string',
          description: 'A line in the philosopher’s idiom. A paraphrase, not a quotation.',
        },
      },
    },
    panel: {
      type: 'array',
      description:
        'Three or four other panel members reacting to the verdict, each in their own voice. At least one must dissent.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['philosopherId', 'position', 'remark'],
        properties: {
          philosopherId: { type: 'string', enum: PANEL_IDS },
          position: { type: 'string', enum: ['concurring', 'dissenting', 'unsettled'] },
          remark: {
            type: 'string',
            description: 'One to three sentences, written as that philosopher would write.',
          },
        },
      },
    },
    definingPost: {
      type: 'object',
      additionalProperties: false,
      required: ['index', 'why'],
      properties: {
        index: {
          type: 'integer',
          description: 'The [n] marker of the single item that best distils this person.',
        },
        why: {
          type: 'string',
          description:
            'Two to four sentences on why this one, read through the assigned philosopher.',
        },
      },
    },
    themes: {
      type: 'array',
      description: 'Three to five recurring preoccupations.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'evidence'],
        properties: {
          name: { type: 'string' },
          evidence: {
            type: 'string',
            description: 'One sentence, citing item numbers.',
          },
        },
      },
    },
    tensions: {
      type: 'array',
      description:
        'One to three contradictions in the corpus — where their words and their taste pull apart.',
      items: { type: 'string' },
    },
    shadow: {
      type: 'object',
      additionalProperties: false,
      required: ['philosopherId', 'why'],
      properties: {
        philosopherId: { type: 'string', enum: PANEL_IDS },
        why: {
          type: 'string',
          description:
            'The panel member this person would argue with hardest — and what that argument would reveal.',
        },
      },
    },
    readingList: {
      type: 'array',
      description: 'Three real books or essays, chosen for this person specifically.',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'author', 'why'],
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          why: { type: 'string', description: 'One sentence.' },
        },
      },
    },
    confidence: {
      type: 'object',
      additionalProperties: false,
      required: ['level', 'caveat'],
      properties: {
        level: { type: 'string', enum: ['low', 'medium', 'high'] },
        caveat: {
          type: 'string',
          description: 'What the corpus could not tell you.',
        },
      },
    },
  },
};

export class EngineError extends Error {
  constructor(message, { status = 502, hint } = {}) {
    super(message);
    this.name = 'EngineError';
    this.status = status;
    this.hint = hint;
  }
}

/**
 * Resolve every `[n]` the panel cited into the item it points at.
 *
 * Only the cited indices, and only the fields a reader needs — the corpus can
 * run to hundreds of items and the client has no business receiving all of it.
 * This is what lets the floor-plan visualisation weigh a claim by the evidence
 * under it, and tell the subject's own words apart from things they amplified,
 * without the client re-deriving anything.
 */
function citationIndex(analysis, corpus) {
  const wanted = new Set();
  const walk = (node) => {
    if (typeof node === 'string') {
      for (const m of node.matchAll(/\[(\d{1,3})\]/g)) wanted.add(Number(m[1]));
    } else if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (node && typeof node === 'object') {
      Object.values(node).forEach(walk);
    }
  };
  walk(analysis);

  const out = {};
  for (const n of wanted) {
    const item = corpus.index.get(n);
    if (!item) continue; // A hallucinated citation resolves to nothing, as it should.
    out[n] = {
      kind: item.kind,
      likes: item.likes ?? 0,
      createdAt: item.createdAt ?? null,
      excerpt: (item.title || item.text || '').slice(0, 140),
    };
  }
  return out;
}

/** Attach roster metadata so the client never has to know the philosopher list. */
function hydrate(analysis, corpus, collection) {
  const withMeta = (id) => {
    const p = byId(id);
    return p
      ? { id: p.id, name: p.name, era: p.era, school: p.school }
      : { id, name: id, era: '', school: '' };
  };

  const cited = corpus.index.get(analysis.definingPost?.index);

  return {
    ...analysis,
    verdict: {
      ...analysis.verdict,
      philosopher: withMeta(analysis.verdict.philosopherId),
    },
    panel: (analysis.panel ?? []).map((entry) => ({
      ...entry,
      philosopher: withMeta(entry.philosopherId),
    })),
    shadow: {
      ...analysis.shadow,
      philosopher: withMeta(analysis.shadow.philosopherId),
    },
    definingPost: {
      ...analysis.definingPost,
      // Resolved server-side from the citation index rather than asked for in
      // the schema — the model cites a number, we own the text and the link.
      text: cited?.text ?? null,
      title: cited?.title ?? null,
      url: cited?.url ?? null,
      createdAt: cited?.createdAt ?? null,
      kind: cited?.kind ?? null,
      // Carried so the exhibit label can say "Thread · 4 posts" and name whose
      // words a repost or a like actually was.
      parts: cited?.parts ?? null,
      via: cited?.via ?? null,
    },
    citations: citationIndex(analysis, corpus),
    subject: collection.profile,
    platform: collection.platform,
    stats: corpus.stats,
    coverage: collection.coverage,
    pipeline: collection.pipeline ?? null,
    model: MODEL,
    generatedAt: new Date().toISOString(),
  };
}

/**
 * Run the panel over a corpus.
 *
 * Streams because the verdict is long and a non-streaming request at this
 * `max_tokens` risks an HTTP timeout; `onProgress` is called with the running
 * character count so the UI can show the panel actually writing.
 */
export async function convenePanel({ corpus, collection, onProgress }) {
  if (!hasCredentials()) {
    throw new EngineError('No Anthropic credentials configured.', {
      status: 503,
      hint: 'Set ANTHROPIC_API_KEY in .env, or use demo mode.',
    });
  }

  const stream = getClient().messages.stream({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config: {
      effort: EFFORT,
      format: { type: 'json_schema', schema: SCHEMA },
    },
    system: [
      {
        type: 'text',
        text: SYSTEM,
        // The system prompt and roster are byte-identical on every request, so
        // this prefix is cached across analyses.
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [
      {
        role: 'user',
        content: `Convene the panel on this corpus and write the placard.\n\n${corpus.text}`,
      },
    ],
  });

  if (onProgress) {
    let written = 0;
    stream.on('text', (delta) => {
      written += delta.length;
      onProgress(written);
    });
  }

  let message;
  try {
    message = await stream.finalMessage();
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      throw new EngineError('The panel is oversubscribed right now.', {
        status: 429,
        hint: 'Rate limited by the Anthropic API — try again in a minute.',
      });
    }
    if (err instanceof Anthropic.AuthenticationError) {
      throw new EngineError('Anthropic rejected the API key.', { status: 401 });
    }
    if (err instanceof Anthropic.APIConnectionError) {
      throw new EngineError('Could not reach the Anthropic API.', { status: 503 });
    }
    throw new EngineError(err.message || 'The panel failed to reach a verdict.');
  }

  if (message.stop_reason === 'refusal') {
    throw new EngineError('The panel declined to rule on this corpus.', {
      status: 422,
      hint: message.stop_details?.explanation ?? undefined,
    });
  }

  if (message.stop_reason === 'max_tokens') {
    throw new EngineError('The verdict ran past its length limit.', {
      status: 502,
      hint: 'Try again — the panel occasionally overwrites.',
    });
  }

  const text = message.content.find((b) => b.type === 'text')?.text;
  if (!text) {
    throw new EngineError('The panel returned an empty verdict.');
  }

  let analysis;
  try {
    analysis = JSON.parse(text);
  } catch {
    throw new EngineError('The verdict came back malformed.');
  }

  return {
    ...hydrate(analysis, corpus, collection),
    usage: {
      input: message.usage.input_tokens,
      output: message.usage.output_tokens,
      cacheRead: message.usage.cache_read_input_tokens ?? 0,
    },
  };
}
