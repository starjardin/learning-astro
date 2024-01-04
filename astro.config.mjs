import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://starjardin.github.io',
  output: "server",
  adapter: vercel()
});