// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100, // Ajusta el intervalo según sea necesario
      },
    },
  },
});
