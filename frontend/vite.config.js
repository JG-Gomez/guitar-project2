import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port:3000,
    strictPort: true,
    hmr:{
      clientPort: 3000,
    },
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})