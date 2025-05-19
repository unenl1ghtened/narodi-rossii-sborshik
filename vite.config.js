import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

// Функция рекурсивного поиска всех .html файлов внутри src
function getHtmlEntries(dirPath) {
  const entries = {};

  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      // Пропускаем папку 'html' внутри src
      if (stat.isDirectory()) {
        // Исключаем src/html и всё, что внутри неё
        const relative = path.relative('src', fullPath).replace(/\\/g, '/');
        if (relative.startsWith('html')) continue;

        walk(fullPath);
      } else if (stat.isFile() && item.endsWith('.html')) {
        const name = path
          .relative('src', fullPath)
          .replace(/\\/g, '/')
          .replace(/\.html$/, '');
        entries[name] = resolve(__dirname, fullPath);
      }
    }
  }

  walk(dirPath);
  return entries;
}

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  root: './src',
  base: './',
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    minify: false,
    rollupOptions: {
      input: getHtmlEntries(path.resolve(__dirname, 'src')),
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg)$/i.test(assetInfo.name)) {
            return 'assets/images/[name][extname]';
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name][extname]';
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return 'assets/css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
});
