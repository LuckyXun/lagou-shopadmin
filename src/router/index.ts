/*
 * @Author: XunL
 * @Description: Router
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import orderRouter from './modules/order'
import productRouter from './modules/product'
import permissionRouter from './modules/permission'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'home', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      },
      orderRouter,
      productRouter,
      permissionRouter
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
