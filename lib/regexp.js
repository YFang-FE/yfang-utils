"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.isPhone = void 0;
/**
 * @export 判断是否为中国大陆手机
 * @param phone 手机号码
 * @returns {boolean}
 */
function isPhone(phone) {
    return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}
exports.isPhone = isPhone;
/**
 * @export 判断是否为邮箱
 * @param {string} emailStr 邮箱地址
 * @returns {boolean}
 */
function isEmail(emailStr) {
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr);
}
exports.isEmail = isEmail;
//# sourceMappingURL=regexp.js.map