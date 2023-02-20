import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: staticAdapter(),
    alias: {
      $wails: "./wailsjs/go/main",
    },
  },
};

export default config;
