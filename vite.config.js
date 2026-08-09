import { defineConfig } from 'vite';

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
  },
});
