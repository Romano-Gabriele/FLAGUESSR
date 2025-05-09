import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',  // La cartella dove verranno salvate le pagine
      assets: 'docs', // La cartella per gli asset
      fallback: 'index.html',
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : '/FLAGUESSR',  // Lasciamo la base vuota se il sito è direttamente nella root
    },
  },
};

export default config;
