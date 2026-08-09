/**
 * Twitter / X collection.
 *
 * A thin façade over `../pipeline/x/`, which runs the staged collection
 * (profile → timeline → likes → thread reassembly). Keeping the façade means
 * routes, the corpus builder and tests talk to one function with one contract.
 *
 * Two credentials matter here and they are not interchangeable:
 *
 *   X_BEARER_TOKEN       app-only. Profile + timeline. The one most people have.
 *   X_USER_ACCESS_TOKEN  OAuth 2.0 user context with `likes.read`. Required for
 *                        liked posts — the app-only bearer returns 403 there,
 *                        no matter how the request is shaped.
 *
 * Likes are the most revealing part of a corpus and the hardest to get, so a
 * missing user token degrades the reading rather than failing it: the gap is
 * recorded in `coverage` and surfaces in the verdict's provenance block.
 */

export { normalizeHandle, X_DEPTHS, XError } from '../pipeline/x/index.js';

import { runXPipeline } from '../pipeline/x/index.js';

/**
 * @param {string} rawHandle handle, @handle, or profile URL
 * @param {{depth?: 'fast'|'standard'|'deep', onProgress?: Function}} options
 */
export async function collectTwitter(rawHandle, options = {}) {
  return runXPipeline(rawHandle, {
    depth: options.depth ?? process.env.X_DEPTH ?? 'standard',
    onProgress: options.onProgress,
  });
}
