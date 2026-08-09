/**
 * Extraction plans.
 *
 * A plan is a declarative map from our field names to candidate paths in
 * whatever JSON a Substack endpoint actually returned:
 *
 *   { list: 'posts', fields: { title: ['title'], text: ['body_html', 'description'] } }
 *
 * Candidates are tried in order, first non-empty wins. That is the whole
 * language.
 *
 * It is deliberately not code. The repair agent (agent.js) writes plans, and a
 * model-authored *plan* can only ever read properties out of a payload we
 * already fetched — whereas model-authored *code* would need a sandbox, a
 * review step, and a much longer argument about trust. Restricting the agent to
 * paths costs a little expressiveness and removes an entire class of risk.
 */

const MAX_DEPTH = 8;

/**
 * Resolve a dotted path against an object. Numeric segments index arrays.
 * Returns `undefined` for anything missing rather than throwing.
 */
export function pick(source, path) {
  if (!path) return undefined;
  const segments = String(path).split('.');
  if (segments.length > MAX_DEPTH) return undefined;

  let node = source;
  for (const segment of segments) {
    if (node == null) return undefined;
    if (Array.isArray(node)) {
      const index = Number(segment);
      if (!Number.isInteger(index)) return undefined;
      node = node[index];
    } else if (typeof node === 'object') {
      // Guard against prototype-walking paths from an untrusted plan.
      if (!Object.hasOwn(node, segment)) return undefined;
      node = node[segment];
    } else {
      return undefined;
    }
  }
  return node;
}

const isEmpty = (v) =>
  v == null || v === '' || (Array.isArray(v) && v.length === 0);

/** First non-empty candidate path, or undefined. */
export function pickFirst(source, candidates) {
  for (const path of candidates ?? []) {
    const value = pick(source, path);
    if (!isEmpty(value)) return value;
  }
  return undefined;
}

/**
 * Find the list of records inside a payload.
 * `plan.list` may be '' (the payload *is* the array) or a dotted path.
 */
export function pickList(payload, plan) {
  if (!plan?.list) return Array.isArray(payload) ? payload : null;
  const value = pick(payload, plan.list);
  return Array.isArray(value) ? value : null;
}

/** Apply a plan to one record. Missing fields come back as null. */
export function applyPlan(record, plan) {
  const out = {};
  for (const [field, candidates] of Object.entries(plan.fields ?? {})) {
    const value = pickFirst(record, candidates);
    out[field] = value === undefined ? null : value;
  }
  return out;
}

/**
 * Does this plan actually work on this payload?
 *
 * A plan is only accepted if it finds a list and fills every required field on
 * a majority of records. This is what stops a plausible-looking but wrong plan
 * from being cached and then quietly producing empty corpora forever.
 */
export function validatePlan(payload, plan, required = ['title', 'text']) {
  const list = pickList(payload, plan);
  if (!list || list.length === 0) {
    return { ok: false, reason: 'plan.list did not resolve to a non-empty array' };
  }

  const sample = list.slice(0, 10);
  let good = 0;
  const missing = new Map();

  for (const record of sample) {
    const applied = applyPlan(record, plan);
    const gaps = required.filter((f) => isEmpty(applied[f]));
    for (const g of gaps) missing.set(g, (missing.get(g) ?? 0) + 1);
    if (gaps.length === 0) good++;
  }

  const rate = good / sample.length;
  if (rate < 0.6) {
    const worst = [...missing.entries()].sort((a, b) => b[1] - a[1]);
    return {
      ok: false,
      reason: `only ${good}/${sample.length} records complete; most-missed field: ${
        worst[0]?.[0] ?? 'unknown'
      }`,
    };
  }

  return { ok: true, rate, records: list.length };
}

/**
 * Plan store.
 *
 * Keyed by host + endpoint + a fingerprint of the payload's top-level shape, so
 * a plan is reused only while the response looks the way it did when the plan
 * was written. When Substack changes the shape, the fingerprint changes, the
 * cached plan is not consulted, and the repair agent runs once more.
 */
export function fingerprint(payload) {
  const shapeOf = (node, depth = 0) => {
    if (node === null) return 'null';
    if (Array.isArray(node)) {
      return depth > 2 ? 'array' : `array<${shapeOf(node[0], depth + 1)}>`;
    }
    if (typeof node === 'object') {
      if (depth > 2) return 'object';
      return `{${Object.keys(node).sort().slice(0, 40).join(',')}}`;
    }
    return typeof node;
  };
  return shapeOf(payload);
}

const store = new Map();

export const planStore = {
  key(host, endpoint, payload) {
    // Hash cheaply — this is a cache key, not a security boundary.
    const shape = fingerprint(payload);
    let h = 0;
    for (let i = 0; i < shape.length; i++) h = (h * 31 + shape.charCodeAt(i)) | 0;
    return `${host}|${endpoint}|${h}`;
  },
  get(key) {
    return store.get(key) ?? null;
  },
  set(key, plan) {
    store.set(key, plan);
  },
  size() {
    return store.size;
  },
  clear() {
    store.clear();
  },
};

/**
 * The plans we ship. These encode what Substack's endpoints looked like when
 * this was written; the repair agent exists precisely because that is a
 * statement about the past, not a guarantee about the present.
 */
export const BUILTIN_PLANS = {
  archive: {
    list: '',
    fields: {
      id: ['id', 'uuid'],
      title: ['title'],
      subtitle: ['subtitle'],
      text: ['body_html', 'truncated_body_text', 'description', 'subtitle'],
      url: ['canonical_url'],
      slug: ['slug'],
      date: ['post_date', 'published_at', 'updated_at'],
      audience: ['audience'],
      paywalled: ['paywalled'],
      reactions: ['reaction_count'],
      comments: ['comment_count'],
    },
  },
  post: {
    list: null,
    fields: {
      title: ['title'],
      text: ['body_html', 'truncated_body_text', 'description'],
      url: ['canonical_url'],
      date: ['post_date', 'published_at'],
      audience: ['audience'],
    },
  },
  notes: {
    list: 'items',
    fields: {
      id: ['entity_key', 'comment.id', 'id'],
      text: ['comment.body', 'body', 'comment.body_json.content.0.content.0.text'],
      date: ['comment.date', 'context.timestamp', 'date'],
      reactions: ['comment.reaction_count'],
    },
  },
  profile: {
    list: null,
    fields: {
      id: ['id'],
      name: ['name'],
      handle: ['handle'],
      bio: ['bio'],
    },
  },
};
