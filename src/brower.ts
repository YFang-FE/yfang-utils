/**
 * @export  设置Cookie
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Number} days 过期时间，单位天
 */
export function setCookie(name: string, value: string, days: number): void {
  const date = new Date()
  date.setDate(date.getDate() + Number(days))
  document.cookie = name + '=' + value + ';expires=' + date
}

/**
 * @export 根据name读取cookie
 * @param  {String} name cookie名称
 * @return {String}
 */
export function getCookie(name: string): string {
  const arr = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=')
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

/**
 * @export 根据name删除cookie
 * @param  {String} name cookie名称
 */
export function removeCookie(name: string): void {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1)
}

type SysTem = 'android' | 'ios' | 'other'
/**
 * @export 为判断当前系统 ios 或 android
 */
export function getMobileSystem(): SysTem {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //g
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    return 'android'
  }
  if (isIOS) {
    //这个是ios操作系统
    return 'ios'
  }
  return 'other'
}

/**
 * @export 判断是否为移动端
 * @returns {boolean}
 */
export function isMobile(): boolean {
  const info = navigator.userAgent
  const agents = ['Android', 'iPhone', 'iPod', 'iPad']
  for (let i = 0; i < agents.length; i++) {
    if (info.indexOf(agents[i]) >= 0) return true
  }
  return false
}

/**
 * @export 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
export function isSupportWebP(): boolean {
  return (
    !![].map &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') == 0
  )
}

/**
 * @export 判断当前是否为PC端
 * @return {boolean}
 */
export function IsPC(): boolean {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * @export 获取浏览器类型和版本,如：'Chrome: 97.0.4692.99'
 * @return {String}
 */
export function getExplore(): string {
  let sys: any = {},
    ua = navigator.userAgent.toLowerCase(),
    s
  ;(s = ua.match(/rv:([\d.]+)\) like gecko/))
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
    : 0
  // 根据关系进行判断
  if (sys.ie) return 'IE: ' + sys.ie
  if (sys.edge) return 'EDGE: ' + sys.edge
  if (sys.firefox) return 'Firefox: ' + sys.firefox
  if (sys.chrome) return 'Chrome: ' + sys.chrome
  if (sys.opera) return 'Opera: ' + sys.opera
  if (sys.safari) return 'Safari: ' + sys.safari
  return 'Unkonwn'
}

/**
 * @export 加载javascript文件
 * @param url js url 路径
 * @returns
 */
export function loadJS(url: string) {
  return new Promise(function(resolve) {
    const domScript: any = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function() {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        resolve(domScript)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  })
}

/**
 * @export 下载json文件
 * @param url json 文件链接
 * @param name json 文件名
 * @returns
 */
export function downloadJson(url: string, name: string = 'json') {
  return fetch(url, {
    method: 'get',
    mode: 'cors'
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      const datastr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data))
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', datastr)
      downloadAnchorNode.setAttribute('download', name + '.json')
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    })
}

/**
 * @export 下载流文件
 * @param url 流链接
 * @param name 流文件名称 + 后缀
 */
export function downloadStreamFile(url: string, name: string) {
  return fetch(url).then(res => {
    return res.blob().then(blob => {
      const blobUrl = window.URL.createObjectURL(blob)
      // 这里的文件名根据实际情况从响应头或者url里获取
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = name
      a.click()
      window.URL.revokeObjectURL(blobUrl)
    })
  })
}
/**
 * @export 下载图片
 * @param src 图片src
 * @param name 图片名称
 * @returns
 */
export function downloadImage(src: string, name?: string) {
  return new Promise(resolve => {
    const image = new Image()
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function() {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      const context = canvas.getContext('2d')
      context && context.drawImage(image, 0, 0, image.width, image.height)
      const url = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      const event = new MouseEvent('click')
      a.download = name || 'photo'
      a.href = url
      a.dispatchEvent(event)
      resolve(null)
    }
    image.src = src
  })
}
