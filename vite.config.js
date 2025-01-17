import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/FLAGUESSR/', // Sostituisci con il nome del tuo repository GitHub
  build: {
    outDir: 'build', // Imposta la cartella di output
  },
});
