/*
 * @Author: XunL
 * @Description:
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'attr',
      name: 'product-attr',
      component: () => import('@/views/product/attr/index.vue'),
      meta: {
        title: '商品属性'
      }
    },
    {
      path: 'classify',
      name: 'product-classify',
      component: () => import('@/views/product/classify/index.vue'),
      meta: {
        title: '商品类型'
      }
    },
    {
      path: 'list',
      name: 'product-list',
      component: () => import('@/views/product/list/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'reply',
      name: 'product-reply',
      component: () => import('@/views/product/reply/index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default routes
