"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadImage = exports.downloadStreamFile = exports.downloadJson = exports.loadJS = exports.getExplore = exports.IsPC = exports.isSupportWebP = exports.isMobile = exports.getMobileSystem = exports.removeCookie = exports.getCookie = exports.setCookie = void 0;
/**
 * @export  设置Cookie
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Number} days 过期时间，单位天
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + Number(days));
    document.cookie = name + '=' + value + ';expires=' + date;
}
exports.setCookie = setCookie;
/**
 * @export 根据name读取cookie
 * @param  {String} name cookie名称
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, '').split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}
exports.getCookie = getCookie;
/**
 * @export 根据name删除cookie
 * @param  {String} name cookie名称
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}
exports.removeCookie = removeCookie;
/**
 * @export 为判断当前系统 ios 或 android
 */
function getMobileSystem() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        //这个是安卓操作系统
        return 'android';
    }
    if (isIOS) {
        //这个是ios操作系统
        return 'ios';
    }
    return 'other';
}
exports.getMobileSystem = getMobileSystem;
/**
 * @export 判断是否为移动端
 * @returns {boolean}
 */
function isMobile() {
    var info = navigator.userAgent;
    var agents = ['Android', 'iPhone', 'iPod', 'iPad'];
    for (var i = 0; i < agents.length; i++) {
        if (info.indexOf(agents[i]) >= 0)
            return true;
    }
    return false;
}
exports.isMobile = isMobile;
/**
 * @export 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function isSupportWebP() {
    return (!![].map &&
        document
            .createElement('canvas')
            .toDataURL('image/webp')
            .indexOf('data:image/webp') == 0);
}
exports.isSupportWebP = isSupportWebP;
/**
 * @export 判断当前是否为PC端
 * @return {boolean}
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
exports.IsPC = IsPC;
/**
 * @export 获取浏览器类型和版本,如：'Chrome: 97.0.4692.99'
 * @return {String}
 */
function getExplore() {
    var sys = {}, ua = navigator.userAgent.toLowerCase(), s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/))
        ? (sys.ie = s[1])
        : (s = ua.match(/msie ([\d\.]+)/))
            ? (sys.ie = s[1])
            : (s = ua.match(/edge\/([\d\.]+)/))
                ? (sys.edge = s[1])
                : (s = ua.match(/firefox\/([\d\.]+)/))
                    ? (sys.firefox = s[1])
                    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
                        ? (sys.opera = s[1])
                        : (s = ua.match(/chrome\/([\d\.]+)/))
                            ? (sys.chrome = s[1])
                            : (s = ua.match(/version\/([\d\.]+).*safari/))
                                ? (sys.safari = s[1])
                                : 0;
    // 根据关系进行判断
    if (sys.ie)
        return 'IE: ' + sys.ie;
    if (sys.edge)
        return 'EDGE: ' + sys.edge;
    if (sys.firefox)
        return 'Firefox: ' + sys.firefox;
    if (sys.chrome)
        return 'Chrome: ' + sys.chrome;
    if (sys.opera)
        return 'Opera: ' + sys.opera;
    if (sys.safari)
        return 'Safari: ' + sys.safari;
    return 'Unkonwn';
}
exports.getExplore = getExplore;
/**
 * @export 加载javascript文件
 * @param url js url 路径
 * @returns
 */
function loadJS(url) {
    return new Promise(function (resolve) {
        var domScript = document.createElement('script');
        domScript.src = url;
        domScript.onload = domScript.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                resolve(domScript);
            }
        };
        document.getElementsByTagName('head')[0].appendChild(domScript);
    });
}
exports.loadJS = loadJS;
/**
 * @export 下载json文件
 * @param url json 文件链接
 * @param name json 文件名
 * @returns
 */
function downloadJson(url, name) {
    if (name === void 0) { name = 'json'; }
    return fetch(url, {
        method: 'get',
        mode: 'cors'
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        var datastr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', datastr);
        downloadAnchorNode.setAttribute('download', name + '.json');
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    });
}
exports.downloadJson = downloadJson;
/**
 * @export 下载流文件
 * @param url 流链接
 * @param name 流文件名称 + 后缀
 */
function downloadStreamFile(url, name) {
    return fetch(url).then(function (res) {
        return res.blob().then(function (blob) {
            var blobUrl = window.URL.createObjectURL(blob);
            // 这里的文件名根据实际情况从响应头或者url里获取
            var a = document.createElement('a');
            a.href = blobUrl;
            a.download = name;
            a.click();
            window.URL.revokeObjectURL(blobUrl);
        });
    });
}
exports.downloadStreamFile = downloadStreamFile;
/**
 * @export 下载图片
 * @param src 图片src
 * @param name 图片名称
 * @returns
 */
function downloadImage(src, name) {
    return new Promise(function (resolve) {
        var image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext('2d');
            context && context.drawImage(image, 0, 0, image.width, image.height);
            var url = canvas.toDataURL('image/png');
            var a = document.createElement('a');
            var event = new MouseEvent('click');
            a.download = name || 'photo';
            a.href = url;
            a.dispatchEvent(event);
            resolve(null);
        };
        image.src = src;
    });
}
exports.downloadImage = downloadImage;
//# sourceMappingURL=brower.js.map