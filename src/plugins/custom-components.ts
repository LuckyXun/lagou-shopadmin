/*
 * @Author: XunL
 * @Description: 全局引入自定义组件
 */
import { App } from 'vue'
import Icon from '@/components/Icon/index'
import Card from '@/components/Card'
import PageContainer from '@/components/PageContainer'
import Pagination from '@/components/Pagination'
import DialogForm from '@/components/DialogForm'
import Editor from '@/components/TextEditor'
import Draggable from '@/components/Draggable'
export default {
  install (app:App) {
    app.use(Icon)
    app.use(Card)
    app.use(PageContainer)
    app.use(Pagination)
    app.use(DialogForm)
    app.use(Editor)
    app.use(Draggable)
  }
}
