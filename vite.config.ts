import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compress from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compress({ algorithm: "brotliCompress" }),
    {
      name: "remove-preload",
      enforce: "post",
      transformIndexHtml: (html) =>
        html.replace(/\s*(<link rel="modulepreload"\s+href=".*vendor.*\.js".*>)\s*/gi, "")
    }
  ],
  build: {
    minify: "esbuild"
  },
  server: {
    https: true
  }
})
