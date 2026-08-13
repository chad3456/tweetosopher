/**
 * Vercel serverless entry for the Tweetosopher API.
 *
 * The Test of Morality does not use this and never calls it — it is static, computes
 * in the browser, and works with the network off. Only Tweetosopher's live analysis
 * needs a server, so only that is deployed as a function. The static site works
 * whether or not this ever runs.
 *
 * Express is mounted as a handler rather than listening on a port: on Vercel the
 * platform owns the socket, and calling app.listen() in a function is the classic
 * way to get a deploy that works locally and times out in production.
 */

import express from 'express';
import cors from 'cors';
import { router as api } from '../server/routes/analyze.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '64kb' }));
app.use('/api', api);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'internal error' });
});

export default app;
