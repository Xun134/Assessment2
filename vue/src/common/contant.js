// 菜单--前端
export const menu = [
  {
    icon: 'el-icon-suitcase',
    title: 'courierManage',
    url: '/courier',
    keepAlive: true,
    children: [
      {
        icon: 'el-icon-tickets',
        title: 'courierManage',
        url: '/courierManage',
        keepAlive: true,
      },
    ],
  },
  {
    icon: 'el-icon-setting',
    title: 'addressManage',
    url: '/addressManage',
    keepAlive: true,
    children: [
      {
        icon: 'el-icon-tickets',
        title: 'addressManage',
        url: '/addressManage',
        keepAlive: true,
      },
    ],
  }
]