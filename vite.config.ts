/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-03-10 15:49:20
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({
    cache: false
  })],
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  },

  css: {
    preprocessorOptions: {

      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }

    }
  }
})
