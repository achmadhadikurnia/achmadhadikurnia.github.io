import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://achmadhadikurnia.com',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    adapter: vercel({
      imageService: true,
    }),
  }),
});
