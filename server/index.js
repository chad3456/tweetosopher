import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import express from 'express';
import cors from 'cors';
import { router as api } from './routes/analyze.js';
import { hasCredentials } from './lib/engine.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');

const app = express();
const PORT = Number(process.env.PORT || 8787);

app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.use('/api', api);

// In production the Vite build is served from the same origin, which keeps the
// frontend's relative `/api` fetches working with no proxy in front.
if (fs.existsSync(dist)) {
  app.use(express.static(dist, { maxAge: '1h', index: 'index.html' }));
  app.get(/^\/(?!api\/).*/, (_req, res) => {
    res.sendFile(path.join(dist, 'index.html'));
  });
}

app.use((err, _req, res, _next) => {
  console.error('[tweetosopher]', err);
  if (res.headersSent) return res.end();
  res.status(500).json({ error: 'Internal error.' });
});

app.listen(PORT, () => {
  const engine = hasCredentials() ? 'live' : 'DEMO (no ANTHROPIC_API_KEY)';
  const x = process.env.X_BEARER_TOKEN
    ? process.env.X_USER_ACCESS_TOKEN
      ? 'timeline + likes'
      : 'timeline only'
    : 'demo corpus';

  console.log(`
  ┌─────────────────────────────────────────────┐
  │  T W E E T O S O P H E R                    │
  │  the museum of the online mind              │
  └─────────────────────────────────────────────┘

  api      http://localhost:${PORT}
  engine   ${engine}
  x/twitter ${x}
  substack public archive (no key needed)
${fs.existsSync(dist) ? `  serving  ${dist}\n` : '  frontend run `npm run dev` for the Vite dev server\n'}`);
});
