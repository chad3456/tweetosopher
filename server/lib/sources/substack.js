/**
 * Substack collection.
 *
 * This module is now a thin façade: the work lives in `../pipeline/`, which
 * runs a multi-stage scrape (feed → archive → full bodies → notes) with a
 * repair agent behind it. Keeping the façade means routes, tests and the corpus
 * builder still talk to one function with one contract, and the pipeline can be
 * reshaped without touching them.
 *
 * No credentials are needed. Everything read here is public.
 */

export { normalizeSubstack } from '../pipeline/index.js';

import { runSubstackPipeline, PipelineError } from '../pipeline/index.js';

export { PipelineError as SubstackError };

/**
 * @param {string} rawInput publication name, host, or URL
 * @param {{depth?: 'fast'|'standard'|'deep', onProgress?: Function}} options
 */
export async function collectSubstack(rawInput, options = {}) {
  return runSubstackPipeline(rawInput, {
    depth: options.depth ?? process.env.SUBSTACK_DEPTH ?? 'standard',
    onProgress: options.onProgress,
  });
}
