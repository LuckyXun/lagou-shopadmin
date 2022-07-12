/*
 * @Author: XunL lixun1@chinatelecom.cn
 * @Date: 2022-07-04 16:34:34
 * @Description: 权限规则相关接口
 */
import request from '@/utils/request'
import { IListParams, IMenu } from './types/rule'
import { IFormData } from './types/form'

export const getMenus = (params:IListParams) => {
  return request<IMenu[]>({
    method: 'get',
    url: '/setting/menus',
    params
  })
}

export const deleteMenu = (id:Number) => {
  return request({
    method: 'delete',
    url: `/setting/menus/${id}`
  })
}

export const updateMenuStatus = (id:number, status: number) => {
  return request({
    method: 'put',
    url: `/setting/menus/show/${id}`,
    params: {
      is_show: status
    }
  })
}

// 获取添加权限规则表单
export const getMenuTree = () => {
  return request<IFormData>({
    method: 'GET',
    url: '/setting/menus/create'
  }).then(data => {
    const findData = data.rules.find(item => item.field === 'menu_list')
    return (findData && findData.props && findData.props.data) || []
  })
}

export const getMenu = (id:number) => {
  return request<IMenu>({
    method: 'GET',
    url: `/setting/menus/${id}`
  })
}

export const updateMenu = (id:number, params:{ path: number[] } & Omit<IMenu, 'id' | 'children' | 'is_del' | 'path'>) => {
  return request({
    method: 'PUT',
    url: `/setting/menus/${id}`,
    params
  })
}
export const createMenu = (params:{ path: number[] } & Omit<IMenu, 'id' | 'children' | 'is_del' | 'path'>) => {
  return request({
    method: 'POST',
    url: '/setting/menus',
    params
  })
}
