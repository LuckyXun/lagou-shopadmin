import { store } from '@/store'
/*
 * @Author: XunL
 * @Description: Router
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import orderRouter from './modules/order'
import productRouter from './modules/product'
import permissionRouter from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: AppLayout,
    children: [
      {
        path: 'home', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          requiresAuth: true
        }
      },
      orderRouter,
      productRouter,
      permissionRouter
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

nprogress.configure({ showSpinner: false })

router.beforeEach((to, from) => {
  nprogress.start()
  // 权限判断
  if (to.meta.requiresAuth && !store.state.user) {
    const fullPath = to.fullPath
    return {
      name: 'login',
      query: {
        redirect: fullPath
      }
    }
  }
})
router.afterEach(() => {
  nprogress.done()
})

export default router
