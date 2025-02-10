import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Polyfill for the crypto module
import nodePolyfills from "rollup-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
});
