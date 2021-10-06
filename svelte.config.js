/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({ env: { port: process.env.PORT } })
	}
};

export default config;
