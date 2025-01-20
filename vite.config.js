import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', // Questa è la cartella di destinazione per i file di build
    rollupOptions: {
      input: 'src/app.html', // Assicurati che Vite prenda il file giusto come punto di ingresso
    },
  },
});
