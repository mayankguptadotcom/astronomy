import { defineConfig } from 'astro/config';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import m2dx from 'astro-m2dx';
import remarkDirective from 'remark-directive';
import { astroImageTools } from "astro-imagetools";
import remarkGfm from 'remark-gfm';
import a11yEmoji from '@fec/remark-a11y-emoji';
import remarkToc from 'remark-toc'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';


/** @type {import('astro-m2dx').Options} */
import sitemap from "@astrojs/sitemap";
const m2dxOptions = {
  // activate any required feature here
  styleDirectives: true,
  relativeImages: true,
  autoImports: true,
};
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://mayankgupta.com',
  integrations: [tailwind(),
    mdx(),
    sitemap(),
    astroImageTools],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkDirective, [m2dx, m2dxOptions], remarkGfm, a11yEmoji, remarkToc, remarkReadingTime]
  },
  extendDefaultPlugins: true
});