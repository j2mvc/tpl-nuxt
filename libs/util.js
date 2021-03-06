import cookies from './util.cookies'
import log from './util.log'
const util = {
  cookies,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
    const processTitle = process.env.VUE_APP_TITLE || 'VUE SSR 网站模板'
    window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
    var a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.setAttribute('id', 'SSIPAdmin-link-temp')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(document.getElementById('site-link-temp'))
}
/**
 * @description 生成时间戳ID
 */
util.createId = function(){
    var t = new Date().getTime();
    var r = Math.abs(Math.floor(Math.random() * (1001 - 9999))) ;
    return t+''+r;
}
// 是否是手机端
util.isMobile = function (req) {
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  let userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  if(userAgent)
    return  userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return undefined;
}

/**
 * 判断环境输出日志
 */
util.logger = function (...text) {
    if(process.env.NODE_ENV === 'development'){
        console.log(...text)
    }
}

/**
 * formate timastamp to time
 * @param {String} timestamp
 */
util.formatDate= function (timestamp){
    var now = new Date(parseInt(timestamp));
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var hour=now.getHours();
    var minute=now.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (date >= 0 && date <= 9) {
        date = "0" + date;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    return year+"-"+month+"-"+date+" "+hour+":"+minute;
}

/**
 * formate timastamp to time
 * @param {String} timestamp 13位UNIX时间戳
 */
util.formatTimestamp= function(timestamp, format) {
    var now = new Date(parseInt(timestamp));
    var date = {
        "M+": now.getMonth() + 1,
        "d+": now.getDate(),
        "h+": now.getHours(),
        "m+": now.getMinutes(),
        "s+": now.getSeconds(),
        "q+": Math.floor((now.getMonth() + 3) / 3),
        "S+": now.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (now.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

export default util
