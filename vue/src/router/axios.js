/**
 * 全站http配置
 *
 * axios参数说明
 */
import axios from 'axios'
axios.defaults.timeout = 10000;

//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
//  axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(config => {
  if(config.url == '/api/user/login' ){
    config.params = data
  }
  return config
}, error => {
  return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
  // console.log(res)
  // const status = res.status || 200
  // const message = res.statusText || '未知错误';
  // 如果请求为非200否者默认统一处理
  // if (status !== 200) {
  //   Message({
  //     message: message,
  //     type: 'error'
  //   })
  //   return Promise.reject(new Error(message))
  // }
  return res.data;
}, error => {
  return Promise.reject(new Error(error));
})

export default axios;
