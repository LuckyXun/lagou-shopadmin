/*
 * @Author: XunL
 * @Date: 2022-03-20 21:08:01
 * @LastEditTime: 2022-06-07 15:24:54
 * @Description: 登录相关api
 */

import request from '@/utils/request'
import { ILoginResponse } from './types/common'

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob',
    params: {
      stamp: +new Date()
    }
  })
}

export const login = (data:{
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'get',
    url: '/setting/admin/logout'
  })
}
