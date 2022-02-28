/**
 * ```ts
 * import {deepClone} from 'yfang-utils'
 * const data = deepClone<{value:string}>({value: 'name'})
 * ```
 * @export 深拷贝任意类型数据
 *
 * @param data 任意类型数据
 * @returns
 */
export function deepClone<T>(data: any): T {
  if (!data || !(data instanceof Object) || typeof data === 'function') {
    return data
  }
  let constructor = data.constructor
  let result = new constructor()
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      result[key] = deepClone(data[key])
    }
  }
  return result
}

/**
 * @export 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
export function isEquals(a: any, b: any): boolean {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
  if (a.prototype !== b.prototype) return false
  if (Array.isArray(a) && Array.isArray(b)) a.sort(), b.sort()

  let keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every(k => isEquals(a[k], b[k]))
}

/**
 * @export 对象序列化
 * @param obj 任意对象
 * @return
 */
export function stringfyQueryString(obj: any): string {
  if (!obj) return ''
  const pairs = []
  for (let key in obj) {
    let value = obj[key]
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]))
      }
      continue
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  return pairs.join('&')
}

/**
 * @export 生成指定范围随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}
 */
export function randomNum(min: number, max: number): number {
  if (typeof min === 'number' && typeof max === 'number')
    return Math.floor(min + Math.random() * (max - min))
  return 0
}

/**
 * @export 时间格式化
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} fmt 格式类型为："yyyy-MM-dd hh:mm:ss"
 * @returns {string}
 */
export function formatDate(date: any, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string {
  if (!date) {
    return '--'
  }
  if (typeof date === 'string' && !/-/.test(date)) date = Number(date)
  date = new Date(date)
  let o: any = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  }
  return fmt
}
