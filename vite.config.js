const path = require('path')
import { defineConfig } from 'vite'
import { minifyHtml, injectHtml } from 'vite-plugin-html'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'ProjectName',
        description: 'A single page application created using Vue.js'
      }
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variables";`
      }
    }
  }
})
