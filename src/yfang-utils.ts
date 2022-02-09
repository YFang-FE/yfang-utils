// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
/* istanbul ignore next */

import { isArray, isString, isFunction, type } from './type'
import { deepClone, isEquals, stringfyQueryString, randomNum, formatDate } from './object'
import { isPhone, isEmail } from './regexp'
import {
  isMobile,
  isSupportWebP,
  IsPC,
  getExplore,
  loadJS,
  downloadImage,
  downloadJson,
  downloadStreamFile,
  getCookie,
  setCookie,
  removeCookie,
  getMobileSystem
} from './brower'
import {
  getProvinces,
  getProvincesDetail,
  getCitys,
  getCitysDetail,
  getDistricts,
  getDistrictsDetail
} from './district'

export {
  // is
  isArray,
  isString,
  isFunction,
  type,
  // object
  deepClone,
  isEquals,
  stringfyQueryString,
  randomNum,
  formatDate,
  // city
  getProvinces,
  getProvincesDetail,
  getCitys,
  getCitysDetail,
  getDistricts,
  getDistrictsDetail,
  // regexp
  isPhone,
  isEmail,
  // brower
  isMobile,
  isSupportWebP,
  IsPC,
  getExplore,
  loadJS,
  downloadImage,
  downloadJson,
  downloadStreamFile,
  getCookie,
  setCookie,
  getMobileSystem,
  removeCookie
}
