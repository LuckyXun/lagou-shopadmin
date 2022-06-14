/*
 * @Author: XunL
 * @Description:
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'setting',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'system_admin/index',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员列表',
        requiresAuth: true
      }
    },
    {
      path: 'role',
      name: 'system_role/index',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色管理',
        requiresAuth: true
      }
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '权限规则',
        requiresAuth: true
      }
    }
  ]
}

export default routes
