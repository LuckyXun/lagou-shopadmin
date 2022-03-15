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

const app = createApp(App)
app.use(ElementPlusPlugin)
app.use(ImportCustomComponentsPLugin)
app.use(router)
app.use(store, key)

createApp(App).use(ElementPlusPlugin).use(ImportCustomComponentsPLugin).use(router).use(store, key).mount('#app')
