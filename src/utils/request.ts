/*
 * @Author: XunL
 * @Description: 封装请求，请求、响应拦截器
 */
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router/'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

request.interceptors.request.use(
  (config) => {
    const token = store.state.user?.token
    // 推断header不是undefined
    if (config && config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 过期锁
let isRefreshing = false

request.interceptors.response.use(
  (response) => {
    // 统一处理响应错误，例如 token 无效、服务端异常等
    const status = response.data.status
    if (status === 200 || response.config.responseType === 'blob') {
      return response
    }
    if (status === 410000) {
      if (isRefreshing) {
        return Promise.reject(response)
      }
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(() => {
        store.commit('setUser', null)
        router.push({
          name: 'login',
          query: {
            redirect: router.currentRoute.value.fullPath
          }
        })
      }).finally(() => {
        isRefreshing = false
      })
      return Promise.reject(response)
    }

    ElMessage.error(response.data.msg || '操作失败。请检查网络')

    return Promise.reject(response)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return (res.data.data || res.data) as T
  })
}
