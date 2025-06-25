import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

export default defineConfig({
  output: "server",
   adapter: vercel(),
  integrations: [
    sitemap(),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {

    assetsInclude: "**/*.riv",
  },
});
