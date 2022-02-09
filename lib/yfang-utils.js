"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCookie = exports.getMobileSystem = exports.setCookie = exports.getCookie = exports.downloadStreamFile = exports.downloadJson = exports.downloadImage = exports.loadJS = exports.getExplore = exports.IsPC = exports.isSupportWebP = exports.isMobile = exports.isEmail = exports.isPhone = exports.getDistrictsDetail = exports.getDistricts = exports.getCitysDetail = exports.getCitys = exports.getProvincesDetail = exports.getProvinces = exports.formatDate = exports.randomNum = exports.stringfyQueryString = exports.isEquals = exports.deepClone = exports.type = exports.isFunction = exports.isString = exports.isArray = void 0;
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var type_1 = require("./type");
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return type_1.isArray; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return type_1.isString; } });
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return type_1.isFunction; } });
Object.defineProperty(exports, "type", { enumerable: true, get: function () { return type_1.type; } });
var object_1 = require("./object");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return object_1.deepClone; } });
Object.defineProperty(exports, "isEquals", { enumerable: true, get: function () { return object_1.isEquals; } });
Object.defineProperty(exports, "stringfyQueryString", { enumerable: true, get: function () { return object_1.stringfyQueryString; } });
Object.defineProperty(exports, "randomNum", { enumerable: true, get: function () { return object_1.randomNum; } });
Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return object_1.formatDate; } });
var regexp_1 = require("./regexp");
Object.defineProperty(exports, "isPhone", { enumerable: true, get: function () { return regexp_1.isPhone; } });
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return regexp_1.isEmail; } });
var brower_1 = require("./brower");
Object.defineProperty(exports, "isMobile", { enumerable: true, get: function () { return brower_1.isMobile; } });
Object.defineProperty(exports, "isSupportWebP", { enumerable: true, get: function () { return brower_1.isSupportWebP; } });
Object.defineProperty(exports, "IsPC", { enumerable: true, get: function () { return brower_1.IsPC; } });
Object.defineProperty(exports, "getExplore", { enumerable: true, get: function () { return brower_1.getExplore; } });
Object.defineProperty(exports, "loadJS", { enumerable: true, get: function () { return brower_1.loadJS; } });
Object.defineProperty(exports, "downloadImage", { enumerable: true, get: function () { return brower_1.downloadImage; } });
Object.defineProperty(exports, "downloadJson", { enumerable: true, get: function () { return brower_1.downloadJson; } });
Object.defineProperty(exports, "downloadStreamFile", { enumerable: true, get: function () { return brower_1.downloadStreamFile; } });
Object.defineProperty(exports, "getCookie", { enumerable: true, get: function () { return brower_1.getCookie; } });
Object.defineProperty(exports, "setCookie", { enumerable: true, get: function () { return brower_1.setCookie; } });
Object.defineProperty(exports, "removeCookie", { enumerable: true, get: function () { return brower_1.removeCookie; } });
Object.defineProperty(exports, "getMobileSystem", { enumerable: true, get: function () { return brower_1.getMobileSystem; } });
var district_1 = require("./district");
Object.defineProperty(exports, "getProvinces", { enumerable: true, get: function () { return district_1.getProvinces; } });
Object.defineProperty(exports, "getProvincesDetail", { enumerable: true, get: function () { return district_1.getProvincesDetail; } });
Object.defineProperty(exports, "getCitys", { enumerable: true, get: function () { return district_1.getCitys; } });
Object.defineProperty(exports, "getCitysDetail", { enumerable: true, get: function () { return district_1.getCitysDetail; } });
Object.defineProperty(exports, "getDistricts", { enumerable: true, get: function () { return district_1.getDistricts; } });
Object.defineProperty(exports, "getDistrictsDetail", { enumerable: true, get: function () { return district_1.getDistrictsDetail; } });
//# sourceMappingURL=yfang-utils.js.map