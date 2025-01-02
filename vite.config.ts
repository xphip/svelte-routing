import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  //root: "tests",
  plugins: [svelte()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "svelte-routing",
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
  resolve: {
    conditions: ['browser']
  }
});
