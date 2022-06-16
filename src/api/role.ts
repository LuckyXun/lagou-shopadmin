/*
 * @Author: XunL
 * @Description: 角色相关接口
 */
import request from '@/utils/request'
import { IListParams, IRole, IPermission } from './types/role'

export const getRoles = (params:IListParams) => {
  return request<{
    count:number,
    list:IRole[]
  }>({
    method: 'get',
    url: '/setting/role',
    params
  })
}

export const getPermissionTree = () => {
  return request<{menus:IPermission[]}>({
    method: 'get',
    url: '/setting/role/create'
  })
}
