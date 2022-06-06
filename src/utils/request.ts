/*
 * @Author: XunL
 * @Description: 封装请求，请求、响应拦截器
 */
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    // 统一处理响应错误，例如 token 无效、服务端异常等
    console.log(response)
    if (response.data.status && response.data.status !== 200) {
      ElMessage.error(response.data.msg || '操作失败。请检查网络')
      return Promise.reject(response)
    }

    return response
  },
  (err) => {
    console.log('inini')
    return Promise.reject(err)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return (res.data.data || res.data) as T
  })
}
