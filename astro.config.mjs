import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mcinotti.github.io',
	base: '/mcinotti.github.io',
	integrations: [mdx(), sitemap()],
});