/**
 * @export 判断是否为中国大陆手机
 * @param phone 手机号码
 * @returns {boolean}
 */
export function isPhone(phone: string): boolean {
  if (typeof phone === 'string') return /^1[3|4|5|7|8][0-9]{9}$/.test(phone)
  else return false
}

/**
 * @export 判断是否为邮箱
 * @param {string} emailStr 邮箱地址
 * @returns {boolean}
 */
export function isEmail(emailStr: string): boolean {
  if (typeof emailStr === 'string')
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr)
  else return false
}
