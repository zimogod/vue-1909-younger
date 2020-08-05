import Vue from 'vue'
// ES6引入依赖的新语法
import VueRouter from 'vue-router'
// 引入home组件 第一种缓存加载路由
// import Home from '../client/home';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    // 路由懒加载
    component: () => import('../client/home.vue')
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('../client/page.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
