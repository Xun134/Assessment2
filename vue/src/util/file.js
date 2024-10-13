/**
 * 文件工具类
 */

/**
 * @param cellValue 文件类型
 */
export function fileType(row, column, cellValue, index) {
  // table
  let result
  switch (cellValue) {
    case 'excel':
      result = '表格'
      break
    case 'image':
      result = '图片'
      break
    case 'audio':
      result = '媒体文件'
      break
    case 'pdf':
      result = 'PDF'
      break
    case 'pp':
      result = '演示文稿'
      break
    case 'text':
      result = '文本文件'
      break
    case 'video':
      result = '视频文件'
      break
    case 'word':
      result = 'Word 文档'
      break
    case 'archive':
      result = '压缩文件'
      break
    case 'folder':
      result = '文件夹'
      break
    case 'bim':
      result = 'bim 文件'
      break
    case 'code':
    case 'file':
    default:
      result = '文件'
      break
  }
  return result
}
/**
* @param type 文件类型
*/
export function fileSort(type) {
  // 文件类型排序
  let result
  switch (type) {
    case 'folder':
      result = 1
      break
    case 'pp':
      result = 2
      break
    case 'doc':
      result = 3
      break
    case 'excel':
      result = 4
      break
    case 'image':
      result = 5
      break
    case 'audio':
      result = 6
      break
    case 'pdf':
      result = 7
      break
    case 'text':
      result = 8
      break
    case 'video':
      result = 9
      break
    case 'archive':
      result = 10
      break
    case 'code':
      result = 11
      break
    case 'bim':
      result = 12
      break
    case 'file':
    default:
      result = 12
      break
  }
  return result
}

/**
* @param mod 文件模式
* @param type 文件类型
*/
export function fileImg(mod, type) {
  console.log()
  // 图片
  let result, suffix
  if (mod) suffix = '_list'
  else suffix = '_view'
  switch (type) {
    case 'excel':
      result =
        'background-image: url(../../../static/img/file/file_excel' +
        suffix +
        '.png)'
      break
    case 'image':
      result =
        'background-image: url(../../../static/img/file/file_img' + suffix + '.png)'
      break
    case 'audio':
      result =
        'background-image: url(../../../static/img/file/file_music' +
        suffix +
        '.png)'
      break
    case 'pdf':
      result =
        'background-image: url(../../../static/img/file/file_pdf' + suffix + '.png)'
      break
    case 'pp':
      result =
        'background-image: url(../../../static/img/file/file_ppt' + suffix + '.png)'
      break
    case 'text':
      result =
        'background-image: url(../../../static/img/file/file_txt' + suffix + '.png)'
      break
    case 'video':
      result =
        'background-image: url(../../../static/img/file/file_video' + suffix + '.png)'
      break
    case 'word':
      result =
        'background-image: url(../../../static/img/file/file_word' +
        suffix +
        '.png)'
      break
    case 'archive':
      result =
        'background-image: url(../../../static/img/file/file_zip' + suffix + '.png)'
      break
    case 'folder':
      result =
        'background-image: url(../../../static/img/file/folder' + suffix + '.png)'
      break
    case 'bim':
      result =
        'background-image: url(../../../static/img/file/file_bim' + suffix + '.png)'
      break
    case 'file':
    case 'code':
    default:
      result =
        'background-image: url(../../../static/img/file/file_unknow' +
        suffix +
        '.png)'
      break
  }
  return result
}

/**
 * 文件下载
 * @param fileName 文件模式
 * @param url 文件类型
 */
export function toDownload(fileName, url) {
  let download = document.createElement('a')
  download.style.display = 'none'
  document.body.appendChild(download)
  download.download = fileName
  download.href = url
  let flag = false
  try {
    download.click()
    flag = true
  } catch (e) {
    console.error('下载失败!')
  }
  document.body.removeChild(download)
  return flag
}

function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
* 将一个对象转成QueryString
*/
export function toQueryString(obj) {
  if (!obj) return ''
  return cleanArray(
    Object.keys(obj).map(key => {
      if (obj[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    })
  ).join('&')
}

/**
 * 截取上传的文件名
 */
export function substrFileName(filename) {
  if (filename) {
    if (filename.lastIndexOf('vuefile') != -1) {
      let index = filename.lastIndexOf('/')
      filename = filename.substr(index + 1, filename.length)
      if(filename.lastIndexOf('file') != -1) {
        index = filename.lastIndexOf('file')
        return filename.substr(index + 4, filename.length)
      }
      return filename
    } else {
      let index = filename.lastIndexOf("/");
      return filename.substr(index + 1, filename.length);
    }
  } else {
    return filename
  }
}
