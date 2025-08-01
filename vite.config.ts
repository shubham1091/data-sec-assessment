import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Chart.js and related dependencies
          'chart': ['chart.js', 'react-chartjs-2'],
          // Separate PDF generation libraries
          'pdf': ['jspdf', 'html2canvas'],
          // Separate Lucide icons
          'icons': ['lucide-react'],
          // React and core dependencies
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000,
  },
})
