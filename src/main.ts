/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import './styles/index.scss'
import ElementPlusPlugin from '@/plugins/element-plus'
import ImportCustomComponentsPLugin from '@/plugins/custom-components'
import VxeTablePlugin from './plugins/vxe-table'

const app = createApp(App)
app.use(ElementPlusPlugin)
app.use(ImportCustomComponentsPLugin)
app.use(VxeTablePlugin)
app.use(router)
app.use(store, key)
app.mount('#app')
