import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Use base path only in production (GitHub Pages)
const base = process.env.NODE_ENV === "production" ? "/NorbertWagner" : "/";

export default defineConfig({
  site: "https://IssaGithub.github.io",
  base: base,
  integrations: [tailwind()],
});
