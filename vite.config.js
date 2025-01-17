import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist', // Questa è la cartella dove verranno salvati i file di output
  },
  base: '/FLAGUESSR/', // Imposta la base dell'URL, utile per GitHub Pages o altre configurazioni
});
