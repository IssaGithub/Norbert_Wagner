import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://IssaGithub.github.io",
  base: "/NorbertWagner",
  trailingSlash: "always",
  integrations: [tailwind()],
  build: {
    assets: "_astro",
  },
});
