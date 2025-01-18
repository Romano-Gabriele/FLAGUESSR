import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: '/FLAGUESSR/',  // Sostituisci 'nome-repo' con il nome del tuo repository
    },
    adapter: adapter({
      pages: 'docs',        // Cartella di destinazione per le pagine
      assets: 'docs',       // Cartella di destinazione per gli asset
      fallback: 'index.html',  // Nessun fallback per il routing
      precompress: false,   // Precompressione dei file non necessaria
      strict: true,         // Modalità rigorosa
    }),
  },
};

export default config;