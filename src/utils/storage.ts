/*
 * @Author: XunL
 * @Description: 封装本地存储的方法
 */
export function setItem (key:string, value:Object|string|null) {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

export function getItem<T> (key:string) {
  const value = window.localStorage.getItem(key)
  if (!value) {
    return null
  }
  try {
    const result = JSON.parse(value)
    return result as T
  } catch {
    return null
  }
}

export function removeItem (key:string) {
  window.localStorage.removeItem(key)
}
