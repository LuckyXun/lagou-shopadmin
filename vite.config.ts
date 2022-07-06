/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-07-01 10:17:05
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { join } from 'path'
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('ion-')
      }
    }
  }), eslintPlugin({
    cache: false
  }), createStyleImportPlugin({
    resolves: [
      VxeTableResolve()
    ]
  })],
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss" ; @import "@/styles/mixins.scss";'
      }

    }
  },

  server: {
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api/', // 代理的目标地址
        changeOrigin: true

      }
    }
  }
})
