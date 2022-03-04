/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-03-03 17:25:03
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({
    cache: false
  })]
})
