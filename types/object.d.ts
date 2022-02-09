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
export declare function deepClone<T>(data: any): T;
/**
 * @export 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
export declare function isEquals(a: any, b: any): boolean;
/**
 * @export 对象序列化
 * @param obj 任意对象
 * @return
 */
export declare function stringfyQueryString(obj: any): string;
/**
 * @export 生成指定范围随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}
 */
export declare function randomNum(min: number, max: number): number;
/**
 * @export 时间格式化
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} fmt 格式类型为："yyyy-MM-dd hh:mm:ss"
 * @returns {string}
 */
export declare function formatDate(date: any, fmt?: string): string;
