/**
 * DistrictDetail 类型
 */
declare type DistrictDetail = {
    label: string;
    value: string;
};
/**
 * @export 获取省份字符串列表
 * @returns
 */
export declare function getProvinces(): string[];
/**
 * @export 获取省份列表详情
 * @returns
 */
export declare function getProvincesDetail(): DistrictDetail[];
/**
 * @export 获取省份对应的城市列表
 * @param province 省份名称
 * @returns
 */
export declare function getCitys(province: string): string[];
/**
 * @export 获取省份对应的城市详情列表
 * @param province 省份名称，可以为空
 * @param proId 省份id
 * @returns
 */
export declare function getCitysDetail(province: string, proId?: string): DistrictDetail[];
/**
 * @export 获取城市对应的区域列表
 * @param city 城市名称
 * @returns
 */
export declare function getDistricts(city: string): string[];
/**
 * @export 获取城市对应的区域详情列表
 * @param city 城市名称
 * @param cid 城市id
 * @returns
 */
export declare function getDistrictsDetail(city: string, cid?: string): DistrictDetail[];
export {};
