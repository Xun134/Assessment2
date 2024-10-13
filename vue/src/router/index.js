import Vue from 'vue'
import VueRouter from 'vue-router'
import PageRouterInit from './page/index' // 基础菜单信息
import {menu} from '@/common/contant'
Vue.use(VueRouter)

// 获取登录后的菜单信息
export const menuList = [...menu]
// 动态拼装菜单路由方法
export const newComponentFun = function (item) {
  return {
    path: item.url,
    name: item.title,
    component: () => import('@/views' + item.url),
    meta: {
      keepAlive: item.keepAlive,
    }
  }
}
// 遍历菜单数据动态拼装菜单路由
export const PageRouter = []
if (menuList && menuList.length > 0) {
  menuList.map((item) => {
    PageRouter.push(newComponentFun(item))
    if (item.children) {
      item.children.map((item1) => {
        PageRouter.push(newComponentFun(item1))
        if (item1.children) {
          item1.children.map((item2) => {
            PageRouter.push(newComponentFun(item2))

          })
        }
      })
    }
  })
}
console.log(PageRouter);

// 根据基础菜单和拼装菜单生成新的菜单路由
export const Router = new VueRouter({
  // mode: 'history',
  routes: [...PageRouterInit, ...PageRouter]
})


/**
 * beforeEach--全局前置守卫，在路由跳转前触发，它在 每次导航 时都会触发。
 * @to Route: 即将要进入的目标路由对象
 * @from Route: 当前导航正要离开的路由对象
 * @next Function: 一定要调用该方法不然会阻塞路由
 *
 * next的几种情况
 * 1. next(): 进行管道中的下一个钩子。
 * 2. next(false): 中断当前的导航。回到 from 路由对应的地址。
 * 3. next(’/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址，可传递的参数与 router.push 中选项一致。
 * 4. next(error): 导航终止，且该错误会被传递给 router.onError() 注册过的回调。
 */
Router.beforeEach((to, from, next) => {
  next()
})
/**
 *  beforeResolve--全局解析守卫，在路由跳转前，所有 组件内守卫 和 异步路由组件 被解析之后触发，它同样在 每次导航 时都会触发
 * @to Route: 即将要进入的目标路由对象
 * @from Route: 当前导航正要离开的路由对象
 * @next Function: 一定要调用该方法不然会阻塞路由
 */
Router.beforeResolve((to, from, next) => {
  // console.log(to,from)
  next()

})
/**
 *  afterEach--全局后置钩子，它发生在路由跳转完成后，beforeEach 和 beforeResolve 之后，beforeRouteEnter（组件内守卫）之前。它同样在 每次导航 时都会触发。
 * @to Route: 即将要进入的目标路由对象
 * @from Route: 当前导航正要离开的路由对象
 */
Router.afterEach((to, from) => {
  // console.log(to,from)
})


export default Router
