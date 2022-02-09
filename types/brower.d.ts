/**
 * @export  设置Cookie
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Number} days 过期时间，单位天
 */
export declare function setCookie(name: string, value: string, days: number): void;
/**
 * @export 根据name读取cookie
 * @param  {String} name cookie名称
 * @return {String}
 */
export declare function getCookie(name: string): string;
/**
 * @export 根据name删除cookie
 * @param  {String} name cookie名称
 */
export declare function removeCookie(name: string): void;
declare type SysTem = 'android' | 'ios' | 'other';
/**
 * @export 为判断当前系统 ios 或 android
 */
export declare function getMobileSystem(): SysTem;
/**
 * @export 判断是否为移动端
 * @returns {boolean}
 */
export declare function isMobile(): boolean;
/**
 * @export 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
export declare function isSupportWebP(): boolean;
/**
 * @export 判断是否为PC端
 * @return {boolean}
 */
export declare function IsPC(): boolean;
/**
 * @export 获取浏览器类型和版本,如：'Chrome: 97.0.4692.99'
 * @return {String}
 */
export declare function getExplore(): string;
/**
 * @export 加载javascript文件
 * @param url js url 路径
 * @returns
 */
export declare function loadJS(url: string): Promise<unknown>;
/**
 * @export 下载json文件
 * @param url json 文件链接
 * @param name json 文件名
 * @returns
 */
export declare function downloadJson(url: string, name?: string): Promise<void>;
/**
 * @export 下载流文件
 * @param url 流链接
 * @param name 流文件名称 + 后缀
 */
export declare function downloadStreamFile(url: string, name: string): Promise<void>;
/**
 * @export 下载图片
 * @param src 图片src
 * @param name 图片名称
 * @returns
 */
export declare function downloadImage(src: string, name?: string): Promise<unknown>;
export {};
