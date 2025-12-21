import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 1337,
    allowedHosts: [
      'tbh-cms-production.up.railway.app',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ]
  }
});
