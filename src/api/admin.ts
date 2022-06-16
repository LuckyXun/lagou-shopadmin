/*
 * @Author: XunL
 * @Description: 管理员相关api
 */
import request from '@/utils/request'
import { IAdmin, IListParams, IAdminPostData } from './types/admin'
import { IFormData } from './types/form'

export const getAdmins = function (params:IListParams) {
  return request<{
    count:number,
    list:IAdmin[]
  }>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}

export const deleteAdmin = (id:string) => {
  return request({
    method: 'DELETE',
    url: `/setting/admin/${id}`
  })
}

export const updateAdminStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/setting/set_status/${id}/${status}`
  })
}

export const getSelectRoles = () => {
  return request<IFormData>({
    method: 'get',
    url: '/setting/admin/create'
  }).then(data => {
    const roles = data.rules.find(n => n.field === 'roles')
    if (!roles?.options) {
      return []
    }
    return roles.options
  })
}

export const createAdmin = (data:IAdminPostData) => {
  return request({
    method: 'post',
    url: '/setting/admin',
    data
  })
}

export const updateAdmin = (id:number, data:IAdminPostData) => {
  return request({
    method: 'put',
    url: `/setting/admin/${id}`,
    data
  })
}

export const getAdmin = (id:number) => {
  return request<IFormData>({
    method: 'get',
    url: `/setting/admin/${id}/edit`
  }).then(res => {
    const rules = res.rules
    const result:Record<string, any> = {}
    rules.forEach(rule => {
      result[rule.field] = rule.value
    })
    result.roles = result.roles.map((n:string) => +n)
    return result as IAdminPostData
  })
}
