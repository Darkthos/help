import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      dir: "src",
      prefix: "~",
      deep: true,
    }),
  ],
  server: {
    port: 3000,
  },
});
