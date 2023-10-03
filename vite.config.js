import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /* server: {
    proxy: {
      // Create a proxy for requests to the News API
      '/news-api': {
        target: 'https://newsapi.org',
        changeOrigin: true, // This ensures the 'host' header is properly set
        rewrite: (path) => path.replace(/^\/news-api/, ''), // Remove the '/news-api' prefix from the URL
      },
    },
  }, */
  server: {
    proxy: {
      '/news-api': 'http://localhost:5000', // Replace with the actual URL of your proxy server
    },
  },
  plugins: [react()],
})
