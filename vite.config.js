import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      "/libxdaq": {
        target: "https://developer.kontex.io",
        changeOrigin: true,
      },
      "/downloads": {
        target: "https://developer.kontex.io",
        changeOrigin: true,
      },
    },
  },
});
