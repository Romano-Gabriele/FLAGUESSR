import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',  // La cartella di destinazione per la build (GitHub Pages)
    rollupOptions: {
      input: 'src/app.html', // Usare `src/app.html` come punto di ingresso principale
    },
  },
});
