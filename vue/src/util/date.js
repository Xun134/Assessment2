export const calcDate = (date1, date2) => {
  let date3 = date2 - date1;

  let days = Math.floor(date3 / (24 * 3600 * 1000))

  let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000))

  let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))

  let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  let seconds = Math.round(date3 / 1000)
  return {
    leave1,
    leave2,
    leave3,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

/**
 * 时间格式化
 * 将时间格式化成类似 2018/09/23
 * 可以指定日期分隔符
 * @param datetime 日期
 */
export function formatDateYYYYMMDD(datetime, dateSeprator = '-') {
  if (datetime != null) {
    const dateMat = new Date(datetime)
    const year = dateMat.getFullYear()
    let month = dateMat.getMonth() + 1
    if (month <= 9) month = '0' + month
    let day = dateMat.getDate()
    if (day <= 9) day = '0' + day
    return year + dateSeprator + month + dateSeprator + day
  }
}


/**
 * 日期格式化
 */
export function dateFormat(date, format) {
  format = format || 'yyyy-MM-dd hh:mm:ss';
  if (date !== 'Invalid Date') {
    let o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length === 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
  return '';

}


// 时间加一天
export function addDate(date, days) {
  if (days === undefined || days === '') {
    days = 1;
  }
  var date = new Date(date);
  date.setDate(date.getDate() + days);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}
export function getFormatDate(arg) {
  if (arg === undefined || arg === '') {
    return '';
  }

  var re = arg + '';
  if (re.length < 2) {
    re = '0' + re;
  }

  return re;
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithAllSeperatorNew(datetime, dateSeprator = '-', middleSeprator = ' ', timeSeprator = ':') {
  if (datetime != null) {
    const dateMat = new Date(datetime)
    const year = dateMat.getFullYear()
    const month = dateMat.getMonth() + 1
    const day = dateMat.getDate()
    const hh = dateMat.getHours()
    const mm = dateMat.getMinutes()
    const ss = dateMat.getSeconds()

    let monthNew = month

    let dayNew = day

    let hhNew = hh

    let mmNew = mm

    let ssNew = ss

    if (month < 10) {
      monthNew = '0' + month
    }

    if (day < 10) {
      dayNew = '0' + day
    }

    if (hh < 10) {
      hhNew = '0' + hh
    }

    if (mm < 10) {
      mmNew = '0' + mm
    }

    if (ss < 10) {
      ssNew = '0' + ss
    }

    const timeFormat = year + dateSeprator + monthNew + dateSeprator + dayNew + middleSeprator + hhNew + timeSeprator + mmNew + timeSeprator + ssNew
    return timeFormat
  }
}
