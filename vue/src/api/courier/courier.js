import axios from '@/router/axios';
// 查询
export const courierListQuery = (params) => {
  return axios({
    url: '/api/courier/courierListQuery',
    method: 'get',
    params: {
      ...params,
    },
  })
}
// 新增
export const courierAdd = (param) => {
  return axios({
    url: '/api/courier/addCourier',
    method: 'post',
    data: param,
  })
}
// 编辑
export const courierEdit = (param) => {
  return axios({
    url: '/api/courier/updataCourier',
    method: 'post',
    data: param,
  })
}
// 删除
export const courierDelete = (param) => {
  return axios({
    url: '/api/courier/deleteCourier',
    method: 'get',
    params: {
      id: param
    },
  })
}

// 根据id查询详情
export const queryCourierDetails = (name) => {
  return axios({
    url: '/api/courier/queryCourierDetails',
    method: 'get',
    params: {
      name: name
    },
  })
}
