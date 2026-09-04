import { defineConfig } from "astro/config";

const githubUser = "victor-o-ibe";
const repoName = "victor-ibe-portfolio";

export default defineConfig({
  site: `https://${githubUser}.github.io`,
  base: `/${repoName}`,
  output: "static",
  trailingSlash: "always",
});
