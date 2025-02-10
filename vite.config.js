import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    inject({
      // Example: Provide global variables to modules
      $: "jquery",
      jQuery: "jquery",
      _: "lodash",
    }),
  ],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
});
