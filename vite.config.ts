import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "svelte5-routing",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        dir: "dist",
        format: "es",
      },
    },
    outDir: "dist",
  },
});
