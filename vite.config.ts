import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName =
  process.env.VITE_REPO_NAME ?? process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "byue.github.io";
const explicitBase = process.env.VITE_BASE_PATH;
const isUserSiteRepo = repositoryName.endsWith(".github.io");

const base =
  explicitBase ?? (process.env.NODE_ENV === "production" && !isUserSiteRepo ? `/${repositoryName}/` : "/");

export default defineConfig({
  plugins: [react()],
  base,
});
