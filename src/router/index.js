import Vue from 'vue'
// ES6引入依赖的新语法
import VueRouter from 'vue-router'
// 引入home组件 第一种缓存加载路由
// import Home from '../client/home';

// 全局使用vue-router 
Vue.use(VueRouter)
  const routes = [
    {
      // 默认的根组件，默认显示的组件,唯一的
      path: '/',
      name: 'index',
      // 路由懒加载
      component: () => import('../components/index.vue')
    },
  {
    path: '/home',
    name: 'home',
    // 路由懒加载
    component: () => import('../components/home.vue')
  },
  {
    // 默认的根组件，默认显示的组件
    path: '/vslots',
    name: 'vslots',
    // 路由懒加载
    component: () => import('../components/vslots.vue')
  },
  {
    // 必须的
    path:'/aaa',
    // 不是必须的，组件的名字
    name:'aaa',
    // component:可以去找到某个组件
    component:() => import('../components/common/aaa.vue')
  }
]

const router = new VueRouter({
  // 跳转的方式
  mode: 'hash',//history
  // 打包之后的路径
  base: process.env.BASE_URL,
  routes
})  
// 暴露出去，任何vue组件中皆可使用 
export default router
