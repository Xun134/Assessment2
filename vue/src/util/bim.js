export function forgeFormData(dataObj, ignoreNull) {
  function isArrayOfFile(arr) {//数组中是否有文件
    if (arr == null || !arr instanceof Array)
      return false;
    var ret = false;
    for (var _idx in arr) {
      if (arr[_idx] == null || (arr[_idx].hasOwnProperty('file') && arr[_idx].file == null))
        continue;//跳过空元素
      if (arr[_idx] instanceof File || arr[_idx] instanceof Blob
        || arr[_idx].file instanceof File || arr[_idx].file instanceof Blob) {
        ret = true;
        break;
      }
    }
    return ret;
  }

  ignoreNull = arguments.length == 1 ? true : Boolean(ignoreNull);
  var ret = new FormData();
  var paramName, value;
  var isEmptyFileObj;
  for (paramName in dataObj) {
    value = dataObj[paramName];
    isEmptyFileObj = value != null && value.hasOwnProperty('file') && value.file == null;
    if (value == null || isEmptyFileObj) {
      // 空的文件参数一定不添加
      if (isEmptyFileObj || (value == null && ignoreNull))
        continue;
      else
        ret.append(paramName, '');
    } else {
      if (value.file instanceof File || value.file instanceof Blob) {
        if (value.name)
          ret.append(paramName, value.file, value.name);
        else
          ret.append(paramName, value.file);
      } else if (isArrayOfFile(value)) {
        for (var __idx in value) {
          if (value[__idx] == null || (value[__idx].hasOwnProperty('file') && value[__idx].file == null))
            continue;//跳过空元素
          if (value[__idx].file instanceof File || value[__idx].file instanceof Blob) {
            if (value[__idx].name)
              ret.append(paramName, value[__idx].file, value[__idx].name);
            else
              ret.append(paramName, value[__idx].file);
          } else
            ret.append(paramName, value[__idx]);
        }
      } else
        ret.append(paramName, value);
    }
  }
  return ret;
}