import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set BASE_PATH to "/<repo-name>/"
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
