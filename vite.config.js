import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://backend-book-store-3xxx.onrender.com'
    },
  },
  plugins: [react()],
})


// https://backend-book-store-3xxx.onrender.com
// http://localhost:4000