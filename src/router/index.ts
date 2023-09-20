import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        tabbar: true,
        title: '首页'
      },
      component: HomeView
    },
    {
      path: '/classly',
      name: 'classly',
      meta: {
        tabbar: true,
        title: '分类'
      },
      component: () => import('../views/classly.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        tabbar: true,
        title: '短片'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        tabbar: true,
        title: '我的'
      },
      component: () => import('../views/my.vue')
    },
    {
      path: '/theater',
      name: 'theater',
      meta: {
        title: '正在热映'
      },
      component: () => import('../views/theater.vue')
    },
    {
      path: '/coming',
      name: 'coming',
      meta: {
        title: '即将上映'
      },
      component: () => import('../views/coming.vue')
    },
    {
      path: '/today',
      name: 'today',
      meta: {
        title: '那年今日'
      },
      component: () => import('../views/today.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      meta: {
        title: '电影'
      },
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '电影'
      },
      component: () => import('../views/login.vue')
    }
  ]
})

export default router
