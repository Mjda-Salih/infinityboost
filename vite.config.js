import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
  build: {
    rollupOptions: {
      plugins: [new NodePolyfillPlugin()],
    },
  },
});
