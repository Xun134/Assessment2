import axios from '@/router/axios';
// 查询
export const addressListQuery = (params) => {
  return axios({
    url: '/api/address/addressListQuery',
    method: 'get',
    params: {
      ...params,
    },
  })
}
// 查询
export const saleListQuery = () => {
  return axios({
    url: '/api/order/saleListQuery',
    method: 'get',
    params: {},
  })
}
// 新增
export const addressAdd = (param) => {
  return axios({
    url: '/api/address/addAddress',
    method: 'post',
    data: param,
  })
}
// 编辑
export const addressEdit = (param) => {
  return axios({
    url: '/api/address/updataAddress',
    method: 'post',
    data: param,
  })
}
// 删除
export const addressDelete = (param) => {
  return axios({
    url: '/api/address/deleteAddress',
    method: 'get',
    params: {
      id: param
    },
  })
}
// 根据id查询详情
export const queryAddressDetails = (name) => {
  return axios({
    url: '/api/address/queryAddressDetails',
    method: 'get',
    params: {
      name: name
    },
  })
}