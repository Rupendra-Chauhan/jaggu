import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections (needed for ngrok)
    port: 5173, // Default Vite port
    strictPort: false, // Allow port to be changed if 5173 is busy
    allowedHosts: [
      'localhost',
      '.ngrok.io',
      '.ngrok-free.app',
      '.ngrok.app',
    ],
    // Alternative: use 'all' to allow any host (useful for ngrok)
    // allowedHosts: 'all',
  },
})
