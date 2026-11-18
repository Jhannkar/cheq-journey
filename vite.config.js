import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // relative base so the built site works from any sub-path (GitHub Pages, S3, etc.)
  base: './',
  server: {
    port: 5173,
    open: true,
    allowedHosts: ['swimwear-whacking-lasso.ngrok-free.dev'],
  },
  // `npm run share` — serves the optimized production build on the same port,
  // so the ngrok link loads 2 small files instead of ~40 dev modules.
  preview: {
    port: 5173,
    strictPort: true,
    open: true,
    allowedHosts: ['swimwear-whacking-lasso.ngrok-free.dev'],
  },
})
