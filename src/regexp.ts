/**
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
export function isPhone(phone: string): boolean {
  return /^1[3|4|5|7|8][0-9]{9}$/.test(phone)
}

/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
export function isEmail(emailStr: string): boolean {
  return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr)
}
