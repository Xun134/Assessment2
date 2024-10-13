// 基础路由
export default [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/home/home'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/courierManage',
    name: 'courierManage',
    component: () => import('@/views/courierManage'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/addressManage',
    name: 'addressManage',
    component: () => import('@/views/addressManage'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
]
