import build from '@hono/vite-build/cloudflare-workers'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import prismjs from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    tailwindcss(),
    prismjs({
      languages: ["markup", "html", "xml", "svg", "mathml", "css", "clike", "js", "jsx", "md", "tsx", "ts", "php", "sql"], // https://prismjs.com/#languages-list
      "theme": "tomorrow",
      "css": true
    }),
    honox({
      devServer: { adapter },
      client: { input: ['./app/style.css'] }
    }),
    build()
  ]
})