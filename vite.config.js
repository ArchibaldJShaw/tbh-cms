import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    hmr: {
      host: 'localhost'
    }
  },
  define: {
    global: 'globalThis',
  }
});
