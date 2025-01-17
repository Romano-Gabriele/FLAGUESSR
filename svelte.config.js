import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			   precompress: false,
			   strict: true,
			   trailingSlash: 'always'
		   }),
		   paths: {
			   base: process.env.NODE_ENV === "production" ? "/Biblioteca" : ""
  
		   }
	}
};

export default config;