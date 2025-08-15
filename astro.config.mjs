// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	build: {
		inlineStylesheets: "never",
	},
	site: 'https://www.burtcrismore.com',
	integrations: [
		mdx(),
		sitemap(),
		purgecss(),
	],
	vite: {
		build: {
			cssCodeSplit: false,
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						  if (assetInfo.name?.endsWith('.css')) {
								return 'assets/global.[hash][extname]';
							}
							return 'assets/[name].[hash][extname]';
					}
				}
			}
		}
	}
});
