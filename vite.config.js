import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base defaults to '/' which is correct for Vercel
  plugins: [
    react(),
    tailwindcss(),
  ],
})
