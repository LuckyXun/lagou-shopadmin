/*
 * @Author: XunL
 * @Description: 全局引入自定义组件
 */
import Icon from '@/components/Icon/index'

import { App } from 'vue'

export default {
  install (app:App) {
    app.use(Icon)
  }
}
