/*
 * @Author: XunL
 * @Description:
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'attr',
      name: 'product-attr',
      component: () => import('@/views/product/attr/index.vue')
    },
    {
      path: 'classify',
      name: 'product-classify',
      component: () => import('@/views/product/classify/index.vue')
    },
    {
      path: 'list',
      name: 'product-list',
      component: () => import('@/views/product/list/index.vue')
    },
    {
      path: 'reply',
      name: 'product-reply',
      component: () => import('@/views/product/reply/index.vue')
    }
  ]
}

export default routes
