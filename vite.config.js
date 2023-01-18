import { sveltekit } from '@sveltejs/kit/vite';

// https://stackoverflow.com/questions/72755269/set-crossoriginisolated-svelte-and-sveltekit
/** @type {import('vite').Plugin} */
const viteServerConfig = {
    name: 'log-request-middleware',
    configureServer(server) {
        server.middlewares.use((req, res, next) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET");
            res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            next();
        });
    }
};

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
