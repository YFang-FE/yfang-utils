"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.isPhone = void 0;
/**
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
function isPhone(phone) {
    return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}
exports.isPhone = isPhone;
/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
function isEmail(emailStr) {
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr);
}
exports.isEmail = isEmail;
//# sourceMappingURL=regexp.js.map