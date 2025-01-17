import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/FLAGUESSR/',  // Usa il nome del repository GitHub
  build: {
    outDir: 'dist',
  },
});
