import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/analytics.js',
      name: 'VercelAnalytics',
      formats: ['iife'],
      fileName: () => 'analytics.js'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
