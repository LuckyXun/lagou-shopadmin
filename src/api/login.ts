/*
 * @Author: XunL
 * @Date: 2022-03-20 21:08:01
 * @LastEditTime: 2022-03-20 21:13:08
 * @Description: 登录相关api
 */

import request from '@/utils/request'

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob'
  })
}
