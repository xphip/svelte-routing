import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// this is not used for transpiling but is used by VScode for the Svelte language server
export default {
  preprocess: vitePreprocess(),
};