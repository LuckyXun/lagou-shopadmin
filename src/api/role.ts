/*
 * @Author: XunL
 * @Description: 角色相关接口
 */
import request from '@/utils/request'
import { IListParams, IRole, IPermission, IRolePostData, EditRole } from './types/role'

export const getRoles = (params: IListParams) => {
  return request<{
    count: number;
    list: IRole[];
  }>({
    method: 'get',
    url: '/setting/role',
    params
  })
}

export const getPermissionTree = () => {
  return request<{ menus: IPermission[] }>({
    method: 'get',
    url: '/setting/role/create'
  })
}

export const createRole = (
  id: number,
  params: { role_name: string; status:0|1; checked_menus: string }
) => {
  return request({
    method: 'post',
    url: `/setting/role/${id}`,
    params
  })
}

export const getRole = (id:number) => {
  return request<{role:EditRole}>({
    method: 'get',
    url: `/setting/role/${id}/edit`
  }).then(res => {
    const role = res.role
    const result:Record<string, any> = {}
    result.role_name = role.role_name
    result.status = role.status
    result.checked_menus = role.rules
    return result as IRolePostData
  })
}
export const deleteRole = (id:number) => {
  return request({
    method: 'DELETE',
    url: `/setting/role/${id}`
  })
}
export const updateRoleStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/setting/role/set_status/${id}/${status}`
  })
}
