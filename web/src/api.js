/**
 * Client for the analysis stream.
 *
 * The server replies with line-delimited JSON so the UI can show the panel
 * working instead of a spinner. Each line is one `{ stage, ... }` object; the
 * last one is either `done` (with the verdict) or `error`.
 */

export async function getHealth() {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export class AnalysisError extends Error {
  constructor(message, hint) {
    super(message);
    this.name = 'AnalysisError';
    this.hint = hint;
  }
}

/**
 * @param {{handle: string, platform: string, force?: boolean, signal?: AbortSignal}} opts
 * @returns {AsyncGenerator<object>} every stage event, in order
 */
export async function* analyze({ handle, platform, force = false, signal }) {
  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ handle, platform, force }),
    signal,
  });

  // A non-streaming error (validation, or the server fell over before the
  // stream opened) comes back as ordinary JSON.
  if (!res.ok && res.headers.get('content-type')?.includes('application/json')) {
    const body = await res.json().catch(() => ({}));
    throw new AnalysisError(body.error || `Request failed (${res.status})`, body.hint);
  }
  if (!res.body) {
    throw new AnalysisError('The reading room sent nothing back.');
  }

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += value;

    let newline;
    while ((newline = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      if (!line) continue;

      let event;
      try {
        event = JSON.parse(line);
      } catch {
        continue; // A partial or malformed line: skip rather than abort.
      }

      if (event.stage === 'error') {
        throw new AnalysisError(event.error?.message ?? 'Unknown error', event.error?.hint);
      }
      yield event;
    }
  }

  if (buffer.trim()) {
    try {
      const event = JSON.parse(buffer.trim());
      if (event.stage === 'error') {
        throw new AnalysisError(event.error?.message ?? 'Unknown error', event.error?.hint);
      }
      yield event;
    } catch (err) {
      if (err instanceof AnalysisError) throw err;
    }
  }
}
