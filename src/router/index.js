import Vue from 'vue'
// ES6引入依赖的新语法
import VueRouter from 'vue-router'
// 引入home组件 第一种缓存加载路由
// import Home from '../client/home';
Vue.use(VueRouter)

  const routes = [
  {
    // 默认的根组件，默认显示的组件
    path: '/',
    name: 'home',
    // 路由懒加载
    component: () => import('../components/home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
