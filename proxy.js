import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Define your API proxy route
app.use('/news-api', createProxyMiddleware({
  target: 'https://newsapi.org',
  changeOrigin: true,
  pathRewrite: {
    '^/news-api': '', // Remove the '/news-api' path prefix
  },
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
