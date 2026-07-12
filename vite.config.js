import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/Terminal-2.0/',
  server: { port: 3000, host: true },
  preview: { port: 4173, host: true },
  test: { environment: 'jsdom', setupFiles: './src/test/setup.js', css: true }
})
