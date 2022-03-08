/*
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './styles/index.scss'

createApp(App).use(router).use(store).mount('#app')
