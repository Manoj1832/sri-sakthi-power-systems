import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['gsap', 'motion'],
          'convex-vendor': ['convex'],
          'ogl-vendor': ['ogl'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
})

