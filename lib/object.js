"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.randomNum = exports.stringfyQueryString = exports.isEquals = exports.deepClone = void 0;
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
function deepClone(data) {
    if (!data || !(data instanceof Object) || typeof data === 'function') {
        return data;
    }
    var constructor = data.constructor;
    var result = new constructor();
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            result[key] = deepClone(data[key]);
        }
    }
    return result;
}
exports.deepClone = deepClone;
/**
 * @export 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
function isEquals(a, b) {
    if (a === b)
        return true;
    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;
    if (a.prototype !== b.prototype)
        return false;
    if (Array.isArray(a) && Array.isArray(b))
        a.sort(), b.sort();
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;
    return keys.every(function (k) { return isEquals(a[k], b[k]); });
}
exports.isEquals = isEquals;
/**
 * @export 对象序列化
 * @param obj 任意对象
 * @return
 */
function stringfyQueryString(obj) {
    if (!obj)
        return '';
    var pairs = [];
    for (var key in obj) {
        var value = obj[key];
        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
}
exports.stringfyQueryString = stringfyQueryString;
/**
 * @export 生成指定范围随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}
 */
function randomNum(min, max) {
    if (typeof min === 'number' && typeof max === 'number')
        return Math.floor(min + Math.random() * (max - min));
    return 0;
}
exports.randomNum = randomNum;
/**
 * @export 时间格式化
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} fmt 格式类型为："yyyy-MM-dd hh:mm:ss"
 * @returns {string}
 */
function formatDate(date, fmt) {
    if (fmt === void 0) { fmt = 'yyyy-MM-dd hh:mm:ss'; }
    if (!date) {
        return '--';
    }
    if (typeof date === 'string' && !/-/.test(date))
        date = Number(date);
    date = new Date(date);
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
    return fmt;
}
exports.formatDate = formatDate;
//# sourceMappingURL=object.js.map