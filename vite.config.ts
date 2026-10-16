import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";
import posts from "./content/blog-posts.json";

const blogInputs=Object.fromEntries(posts.map(post=>[`blog-${post.slug}`,resolve(__dirname,`blog/${post.slug}/index.html`)]));

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        protect: resolve(__dirname, "protect/index.html"),
        sesiones: resolve(__dirname, "sesiones/index.html"),
        productos: resolve(__dirname, "productos/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        ...blogInputs,
      },
    },
  },
});
