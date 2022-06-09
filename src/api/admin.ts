/*
 * @Author: XunL
 * @Description: 管理员相关api
 */
import request from '@/utils/request'
import { IAdmin, IListParams } from './types/admin'

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
