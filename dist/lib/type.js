"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.isString = exports.isFunction = exports.isArray = void 0;
/**
 * 判断是否为数组
 * @param obj 任意对象变量
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
exports.isArray = isArray;
/**
 * 判斷是否是函數
 * Determine if it is a function
 * @param o {function} 函數
 */
function isFunction(o) {
    return typeof o === 'function';
}
exports.isFunction = isFunction;
/**
 * 判斷是不是字符串
 * Determine if it is a string
 * @param o {string} 字符串
 */
function isString(o) {
    return typeof o === 'string';
}
exports.isString = isString;
/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
function type(obj) {
    var toString = Object.prototype.toString;
    var toType = {};
    var typeArr = [
        'Undefined',
        'Null',
        'Boolean',
        'Number',
        'String',
        'Object',
        'Array',
        'Function',
        'Date',
        'RegExp',
        'Error',
        'Arguments'
    ];
    typeArr.map(function (item) {
        toType['[object ' + item + ']'] = item.toLowerCase();
    });
    return typeof obj !== 'object' ? typeof obj : toType[toString.call(obj)];
}
exports.type = type;
//# sourceMappingURL=type.js.map