import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "remove-preload",
      enforce: "post",
      transformIndexHtml: (html) =>
        html.replace(/\s*(<link rel="modulepreload"\s+href=".*vendor.*\.js".*>)\s*/gi, "")
    }
  ]
})
