import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize asset handling
    assetsInlineLimit: 4096, // 4kb
    // Set build timeout (30 minutes)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          ui: ['antd', 'framer-motion'],
        }
      }
    }
  },
  // Server configuration for development
  server: {
    hmr: {
      timeout: 30000
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
