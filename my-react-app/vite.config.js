import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'front.local',
    port: 5173,
    https: {
      key: fs.readFileSync('./front.local+3-key.pem'),
      cert: fs.readFileSync('./front.local+3.pem'),
    },
    proxy: {
      '/api': {
        target: 'https://ficket.store',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
