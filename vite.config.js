import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'tbh-cms-production.up.railway.app',
      'localhost',
      '127.0.0.1',
      '.railway.app'
    ],
    hmr: {
      host: 'localhost'
    }
  },
  define: {
    global: 'globalThis',
  }
});
