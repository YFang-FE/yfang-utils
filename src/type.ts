/**
 * @export 判断是否为数组
 * @param obj 任意对象变量
 */
export function isArray(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

/**
 * @export 判斷是否是函數
 * @param o 任意对象变量
 */
export function isFunction(o: any): boolean {
  return typeof o === 'function'
}
/**
 * @export 判斷是不是字符串
 * @param o 任意对象变量
 */
export function isString(o: any): boolean {
  return typeof o === 'string'
}

/**
 * @export  数据类型检测
 * @param obj 任意对象变量
 * @return 类型字符串
 */
export function type(obj: any): string {
  var toString = Object.prototype.toString
  var toType: any = {}
  var typeArr: Array<string> = [
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
  ]
  typeArr.map(item => {
    toType['[object ' + item + ']'] = item.toLowerCase()
  })

  return typeof obj !== 'object' ? typeof obj : toType[toString.call(obj)]
}
