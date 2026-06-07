import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production (build) is served from the custom domain root (www.inferstrat.com),
// so base is "/". Local dev (serve) runs under "/inferstrat-website/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/" : "/inferstrat-website/",
}));
