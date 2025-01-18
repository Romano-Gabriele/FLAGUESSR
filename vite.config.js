import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'src/app.html',  // Assicurati che questo sia il percorso corretto
    },
  },
  base: '/FLAGUESSR/', // Impostazione base per GitHub Pages
});
