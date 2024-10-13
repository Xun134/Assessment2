let xlsx = require('node-xlsx').default
// parse方法的参数为要解析的excel的路径
let list = xlsx.parse('./assets/file/data.xlsx')[0].data
// 数据处理
let data = []
list.forEach((d) => {
  data.push({ id: d[0], name1: d[1], name2: d[2], transAmount: d[7], rate: d[8] });
});
// 输出数据
console.log(data)
// 缓存
localStorage.setItem('exceldata', data)
