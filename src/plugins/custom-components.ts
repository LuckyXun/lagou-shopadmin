/*
 * @Author: XunL
 * @Description: 全局引入自定义组件
 */
import { App } from 'vue'
import Icon from '@/components/Icon/index'
import Card from '@/components/Card'
import PageContainer from '@/components/PageContainer'
import Pagination from '@/components/Pagination'

export default {
  install (app:App) {
    app.use(Icon)
    app.use(Card)
    app.use(PageContainer)
    app.use(Pagination)
  }
}
