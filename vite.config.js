import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'crypto.getRandomValues': 'require("crypto").randomBytes'
  },
})