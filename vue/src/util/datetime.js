/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-const-assign */
/**
 * 时间日期相关操作
 */

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format(datetime) {
  return formatWithSeperator(datetime, '/', ':')
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithSeperator(datetime, dateSeprator, timeSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime)
    const year = dateMat.getFullYear()
    const month = dateMat.getMonth() + 1
    const day = dateMat.getDate()
    const hh = dateMat.getHours()
    const mm = dateMat.getMinutes()
    const ss = dateMat.getSeconds()
    const timeFormat = year + dateSeprator + month + dateSeprator + day + ' ' + hh + timeSeprator + mm + timeSeprator + ss
    return timeFormat
  }
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithSeperatorNew(datetime, dateSeprator, timeSeprator) {
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

    const timeFormat = year + dateSeprator + monthNew + dateSeprator + dayNew + ' ' + hhNew + timeSeprator + mmNew + timeSeprator + ssNew
    return timeFormat
  }
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithAllSeperatorNew(datetime, dateSeprator, middleSeprator, timeSeprator) {
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
 * 获取目标时间到现在时间的工作天数
 * @param targetTime 日期
 */
export function getTargetDateToNowDateDay(targetTime) {
  if (targetTime != null) {
    const targetDate = Date.parse(targetTime);
    const nowTime = new Date();
    const nowDate = Date.parse(nowTime);
    let dateSpan = nowDate - targetDate;
    if (dateSpan >= 0) {
      dateSpan = Math.abs(dateSpan);
      let iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
      iDays = iDays + 1;
      return iDays;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/**
 * 获取目标时间到现在时间的工作天数
 * @param targetTime 日期
 */
export function getEndDateToStartDateDay(targetTime, startTime) {
  if (targetTime != null) {
    const targetDate = Date.parse(targetTime);
    const nowTime = new Date(startTime);
    const nowDate = Date.parse(nowTime);
    let dateSpan = nowDate - targetDate;
    if (dateSpan >= 0) {
      dateSpan = Math.abs(dateSpan);
      let iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
      iDays = iDays + 1;
      return iDays;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
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

export function getCurrentDate() {
  let myDate = new Date();
  let year = myDate.getFullYear(); //年
  let month = myDate.getMonth() + 1; //月
  let day = myDate.getDate(); //日
  if (month >= 10) {
    month = month;
  } else {
    month = "0" + month;
  }
  if (day >= 10) {
    day = day;
  } else {
    day = "0" + day;
  }
  let days = myDate.getDay();
  switch (days) {
    case 1:
      days = '星期一';
      break;
    case 2:
      days = '星期二';
      break;
    case 3:
      days = '星期三';
      break;
    case 4:
      days = '星期四';
      break;
    case 5:
      days = '星期五';
      break;
    case 6:
      days = '星期六';
      break;
    case 0:
      days = '星期日';
      break;
  }
  var str = year + "年" + month + "月" + day + "日  " + days;

  let array = {
    date: year + "-" + month + "-" + day,
    week: days
  }
  return array;
}

export function p(s) {
  return s < 10 ? '0' + s : s
}

export function getDate(date) {
  const d = new Date(date);
  const resDate = d.getFullYear() + '-' + p((d.getMonth() + 1)) + '-' + p(d.getDate())
  const resTime = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds())
  return resDate + ' ' + resTime;
}

