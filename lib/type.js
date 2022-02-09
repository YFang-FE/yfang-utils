"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.isString = exports.isFunction = exports.isArray = void 0;
/**
 * @export 判断是否为数组
 * @param obj 任意对象变量
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
exports.isArray = isArray;
/**
 * @export 判斷是否是函數
 * @param o 任意对象变量
 */
function isFunction(o) {
    return typeof o === 'function';
}
exports.isFunction = isFunction;
/**
 * @export 判斷是不是字符串
 * @param o 任意对象变量
 */
function isString(o) {
    return typeof o === 'string';
}
exports.isString = isString;
/**
 * @export  数据类型检测
 * @param obj 任意对象变量
 * @return 类型字符串
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