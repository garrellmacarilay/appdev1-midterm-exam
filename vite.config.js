import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/appdev1-midterm-exam/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  publicDir: 'public',
});

