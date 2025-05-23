import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // ✅ Correct output directory for Vercel
    chunkSizeWarningLimit: 1000, // ⚠️ Raise size warning threshold (optional)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 📦 Split large dependencies into separate chunks
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
          }
        }
      }
    }
  }
})
