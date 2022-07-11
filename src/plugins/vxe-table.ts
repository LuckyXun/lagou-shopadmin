/*
 * @Author: XunL lixun1@chinatelecom.cn
 * @Date: 2022-07-01 10:18:07
 * @Description: 全局引入vxe-table组件
 */

import { App } from 'vue'
import XEUtils from 'xe-utils'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import 'vxe-table/lib/style.css'
import {
  VXETable,
  Footer,
  Column,
  Table
} from 'vxe-table'
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

export default {
  install (app:App) {
    app.use(Footer)
    app.use(Column)
    app.use(Table)
  }
}
