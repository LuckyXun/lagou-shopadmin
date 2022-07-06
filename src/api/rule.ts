/*
 * @Author: XunL lixun1@chinatelecom.cn
 * @Date: 2022-07-04 16:34:34
 * @Description: 权限规则相关接口
 */
import request from '@/utils/request'
import { IListParams } from './types/rule'

export const getMenus = (params:IListParams) => {
  return request({
    method: 'get',
    url: '/api/admin/setting/menus',
    params
  })
}

export const deleteMenu = (id:Number) => {}

export const updateMenuStatus = () => {}
