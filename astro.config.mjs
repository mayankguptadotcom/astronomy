import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import m2dx from 'astro-m2dx';
import remarkDirective from 'remark-directive';
import { astroImageTools } from "astro-imagetools";
import robotsTxt from 'astro-robots-txt';

/** @type {import('astro-m2dx').Options} */
import sitemap from "@astrojs/sitemap";
const m2dxOptions = {
  // activate any required feature here
  styleDirectives: true,
  relativeImages: true
};
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://mayankgupta.com',
  integrations: [tailwind(),
    mdx(),
    sitemap(),
    astroImageTools,
    robotsTxt({
      sitemap: true,
    })],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkDirective, [m2dx, m2dxOptions]]
  },
  extendDefaultPlugins: true
});