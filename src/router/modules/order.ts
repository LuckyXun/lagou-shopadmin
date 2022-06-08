/*
 * @Author: XunL
 * @Description:
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue'),
      meta: {
        title: '商品评论',
        requiresAuth: true
      }
    },
    {
      path: 'offline',
      name: 'order-offline',
      component: () => import('@/views/order/offline/index.vue'),
      meta: {
        title: '商品评论',
        requiresAuth: true
      }
    }
  ]
}

export default routes
