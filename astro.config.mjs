// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	site: 'https://www.burtcrismore.com',
	integrations: [mdx()],
});
