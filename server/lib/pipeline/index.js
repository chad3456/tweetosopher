/**
 * The Substack ingestion pipeline.
 *
 *   resolve → feed → archive → hydrate → notes → normalize
 *
 * Design notes worth knowing before changing this:
 *
 * **Stages are independently failable.** A run that gets the archive but not
 * the notes produces a thinner reading, not an error. Only a run that ends with
 * nothing at all throws. Every gap is recorded and ends up in the verdict's
 * provenance block, so the panel — and the reader — know what was missing.
 *
 * **Depth is a dial, not a boolean.** `fast` is one request and is what you want
 * behind an interactive form; `deep` is dozens and is what you want in a job.
 * The default sits between.
 *
 * **The agent is a repair mechanism, not a step.** It only runs when a
 * deterministic extractor fails to fit a payload, and what it produces is a
 * cached declarative plan rather than a per-request decision. See agent.js.
 */

import { PoliteClient } from './http.js';
import { newBudget, agentAvailable } from './agent.js';
import { condense } from './text.js';
import * as stages from './stages.js';

export const DEPTHS = {
  // One request. Latest ~20 posts, full bodies for public ones.
  fast: { archive: false, hydrate: false, notes: false, maxArchive: 0, maxHydrate: 0, maxNotes: 0 },
  // Feed + the full archive index + notes. A few requests, good range.
  standard: { archive: true, hydrate: false, notes: true, maxArchive: 150, maxHydrate: 0, maxNotes: 60 },
  // Everything, including full bodies for the thin ones. Minutes, not seconds.
  deep: { archive: true, hydrate: true, notes: true, maxArchive: 300, maxHydrate: 40, maxNotes: 120 },
};

export class PipelineError extends Error {
  constructor(message, { status = 502, hint } = {}) {
    super(message);
    this.name = 'PipelineError';
    this.status = status;
    this.hint = hint;
  }
}

/**
 * `handle`, `handle.substack.com`, `https://handle.substack.com/p/whatever`,
 * or a custom domain → an origin we can crawl.
 */
export function normalizeSubstack(input) {
  const s = String(input ?? '').trim().replace(/^@/, '');
  if (!s) return null;

  if (/^https?:\/\//i.test(s)) {
    try {
      return new URL(s).origin;
    } catch {
      return null;
    }
  }
  if (s.includes('.')) return `https://${s.replace(/\/.*$/, '')}`;
  if (/^[A-Za-z0-9_-]+$/.test(s)) return `https://${s}.substack.com`;
  return null;
}

/**
 * @param {string} input
 * @param {{depth?: keyof DEPTHS, onProgress?: Function, http?: PoliteClient}} options
 */
export async function runSubstackPipeline(input, options = {}) {
  const { depth = 'standard', onProgress, http } = options;

  const origin = normalizeSubstack(input);
  if (!origin) {
    throw new PipelineError(`"${input}" is not a Substack I can resolve.`, {
      status: 400,
      hint: 'Try the publication name, e.g. "astralcodexten", or the full URL.',
    });
  }

  const limits = DEPTHS[depth] ?? DEPTHS.standard;
  const items = new Map();

  const ctx = {
    origin,
    host: new URL(origin).host,
    http: http ?? new PoliteClient(),
    limits,
    items,
    budget: newBudget(),
    agentEnabled: agentAvailable(),
    onProgress,
    publication: null,
    channel: null,
    coverage: { feed: false, archive: false, bodies: 0, notesCount: 0, repairs: [], notes: [] },

    /**
     * Merge a record into the set, keyed by URL.
     *
     * Later stages produce better versions of the same post — the archive knows
     * a post exists, hydration knows what it says — so an upsert only overwrites
     * a field when the incoming value is genuinely richer. Without this, the
     * archive's one-line blurb would clobber the feed's full body.
     */
    upsert(record) {
      const key = record.id;
      if (!key) return;
      const existing = items.get(key);
      if (!existing) {
        items.set(key, record);
        return;
      }
      items.set(key, {
        ...existing,
        ...record,
        text:
          (record.text ?? '').length > (existing.text ?? '').length
            ? record.text
            : existing.text,
        title: record.title || existing.title,
        url: record.url || existing.url,
        createdAt: record.createdAt || existing.createdAt,
        complete: record.complete || existing.complete,
        reactions: Math.max(record.reactions ?? 0, existing.reactions ?? 0),
      });
    },
  };

  const plan = [
    ['resolve', stages.resolve, true],
    ['feed', stages.feed, true],
    ['archive', stages.archive, limits.archive],
    ['hydrate', stages.hydrate, limits.hydrate],
    ['notes', stages.notes, limits.notes],
  ];

  for (const [name, fn, enabled] of plan) {
    if (!enabled) continue;
    try {
      await fn(ctx);
    } catch (err) {
      // A stage blowing up is data we can report, not a reason to lose the run.
      ctx.coverage.notes.push(`${name} stage failed: ${err.message}`);
      onProgress?.({ stage: name, message: `${name} failed: ${err.message}` });
    }
  }

  const collected = [...items.values()].filter((i) => (i.text ?? '').trim().length > 1);
  if (!collected.length) {
    throw new PipelineError(`No public posts found at ${origin}.`, {
      status: 404,
      hint: 'The publication may be private, paywalled, or the name may be wrong.',
    });
  }

  return normalize(ctx, collected);
}

/** Shape the run into the collection contract every source in this project returns. */
function normalize(ctx, collected) {
  const paywalled = collected.filter((i) => i.paywalled).length;
  if (paywalled) {
    ctx.coverage.notes.push(
      `${paywalled} post(s) are paid-subscriber only — read from their public excerpt.`,
    );
  }
  if (!ctx.agentEnabled && ctx.coverage.notes.some((n) => n.includes('could not extract'))) {
    ctx.coverage.notes.push(
      'Extraction repair is unavailable without ANTHROPIC_API_KEY; some fields may be missing.',
    );
  }

  const items = collected
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .map((i) => ({
      id: i.id,
      kind: i.kind,
      title: i.title || null,
      text: condense(i.text),
      createdAt: i.createdAt ?? null,
      url: i.url ?? null,
      likes: i.reactions ?? 0,
      paywalled: Boolean(i.paywalled),
      source: i.source,
    }));

  const name =
    ctx.channel?.title || ctx.publication?.name || ctx.host.replace(/\.substack\.com$/, '');

  return {
    platform: 'substack',
    profile: {
      handle: ctx.host.replace(/\.substack\.com$/, ''),
      displayName: name,
      bio: ctx.channel?.description || ctx.publication?.hero || '',
      url: ctx.origin,
    },
    items,
    coverage: ctx.coverage,
    pipeline: {
      depth: ctx.limits === DEPTHS.fast ? 'fast' : ctx.limits === DEPTHS.deep ? 'deep' : 'standard',
      requests: ctx.http.stats.requests,
      cacheHits: ctx.http.stats.cacheHits,
      retries: ctx.http.stats.retries,
      repairs: ctx.coverage.repairs.length,
      essays: items.filter((i) => i.kind !== 'note').length,
      notes: items.filter((i) => i.kind === 'note').length,
    },
  };
}
