/*
 * @Author: XunL
 * @Description: 通用卡片展示组件
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppCard', Component)
  }
}
