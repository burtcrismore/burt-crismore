import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
	schema: z.object({
		hero: z.object({
			aria: z.string().default("hero-section"),
			headline: z.string(),
			lead: z.string(),
			grid: z.string().default("lg:grid-col-12"),
			spacing: z.string().default("my-lg-1 md:my-lg-3 lg:my-lg-3"),
			span: z.string().default("lg:col-span-10 xl:col-span-8"),
			ctas: z.array(z.object({
				href: z.string(),
				label: z.string(),
				style: z.string(),
			})).optional(),
		}),
		seo: z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
		}),
	}),
});

export const collections = { work };