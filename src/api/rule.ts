/*
 * @Author: XunL lixun1@chinatelecom.cn
 * @Date: 2022-07-04 16:34:34
 * @Description: 权限规则相关接口
 */
import request from '@/utils/request'
import { IListParams, IMenu } from './types/rule'

export const getMenus = (params:IListParams) => {
  return request<IMenu[]>({
    method: 'get',
    url: '/setting/menus',
    params
  })
}

export const deleteMenu = (id:Number) => {}

export const updateMenuStatus = (id:number, status: number) => {
  return request({
    method: 'put',
    url: `/setting/menus/show/${id}`,
    params: {
      is_show: status
    }
  })
}
