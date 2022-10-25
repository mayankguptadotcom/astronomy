import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import m2dx from 'astro-m2dx';
import remarkDirective from 'remark-directive';


/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  // activate any required feature here
  styleDirectives: true,
  relativeImages: true,

};
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    drafts: true,
    remarkPlugins: [
      remarkDirective,
      [m2dx, m2dxOptions]
    ],
  },
  extendDefaultPlugins: true,

});