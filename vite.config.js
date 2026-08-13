import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'web',
  publicDir: false,
  server: {
    port: 5173,
    proxy: {
      // The dev server and the API run separately; in production Express
      // serves the build from the same origin and this proxy is unused.
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
    rollupOptions: {
      // Two instruments, two entry points. The Test of Morality is the app at /;
      // Tweetosopher keeps its own page rather than being deleted for it.
      input: {
        main: resolve(__dirname, 'web/index.html'),
        tweetosopher: resolve(__dirname, 'web/tweetosopher.html'),
      },
    },
  },
});
