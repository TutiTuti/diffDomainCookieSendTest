import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 기본 포트 (필요 시 수정)
    host: 'front.local',
    https: {
      key: fs.readFileSync('./front.local+3-key.pem'),
      cert: fs.readFileSync('./front.local+3.pem'),
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://back.store:8000',
    //     changeOrigin: true,
    //     secure: false, // self-signed SSL 인증서라면 false
    //     // rewrite: path => path.replace(/^\/api/, ''), // 선택사항
    //   }
    // }
  }
})
