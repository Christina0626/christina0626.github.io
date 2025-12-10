import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://christina0626.github.io',
  base: '/christinaluo.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
});