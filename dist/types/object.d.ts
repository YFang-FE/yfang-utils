/**
 * 深拷贝
 * @export
 * @param {*} data
 * @returns {*}
 */
export declare function deepClone<T>(data: any): T;
/**
 * 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
export declare function isEquals(a: any, b: any): boolean;
/**
 * @desc 对象序列化
 * @param  {Object} obj
 * @return {String}
 */
export declare function stringfyQueryString(obj: any): string;
/**
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export declare function randomNum(min: number, max: number): number;
/**
 * 时间格式化
 * @export
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} [fmt="yyyy-MM-dd hh:mm:ss"]
 * @returns {string}
 */
export declare function formatDate(date: any, fmt?: string): string;
