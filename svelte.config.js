//import adapter from "@sveltejs/adapter-auto";
//import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
//import azure from "svelte-adapter-azure-swa";
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true,
      prerender: {
        entries: ['*'] // This will prerender all entries, including dynamic ones
      },
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;
