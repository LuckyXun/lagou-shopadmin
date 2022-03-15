/*
 * @Author: XunL
 * @Description: 封装请求，请求、响应拦截器
 */
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  // 统一处理响应错误，例如 token 无效、服务端异常等
  return response
},
err => {
  return Promise.reject(err)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}