/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-03-08 17:06:03
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({
    cache: false
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
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
