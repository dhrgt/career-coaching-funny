import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/career-coaching-funny/',   // REQUIRED for repo-based GitHub Pages
})
