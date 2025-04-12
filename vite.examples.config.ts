import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './examples',
  publicDir: './public',
  build: {
    outDir: '../dist/examples',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      'react-dialogic': '/src'
    }
  }
}) 