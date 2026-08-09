/**
 * A small in-memory verdict cache.
 *
 * A full analysis is a real API call over a few tens of thousands of tokens, and
 * people reload. Ninety minutes is long enough to cover the "show my friend"
 * loop and short enough that a timeline can meaningfully change underneath it.
 *
 * In-process on purpose — this is a single-node toy. Swap for Redis the moment
 * there is a second node.
 */

const TTL_MS = 90 * 60 * 1000;
const MAX_ENTRIES = 200;

const store = new Map();

export function cacheKey(platform, handle) {
  return `${platform}:${String(handle).toLowerCase()}`;
}

export function get(key) {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    store.delete(key);
    return null;
  }
  // Refresh recency for the LRU eviction below.
  store.delete(key);
  store.set(key, entry);
  return entry.value;
}

export function set(key, value) {
  store.set(key, { value, expires: Date.now() + TTL_MS });
  while (store.size > MAX_ENTRIES) {
    const oldest = store.keys().next().value;
    store.delete(oldest);
  }
}

export function clear() {
  store.clear();
}
