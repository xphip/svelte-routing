import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-auto";

// this is not used for transpiling but is used by VScode for the Svelte language server
export default {
  kit: {
    adapter: adapter(),
    files: {
      lib: "src",
    },
  },
  preprocess: vitePreprocess(),
};
