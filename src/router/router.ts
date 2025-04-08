import('@/pages/HomePage.vue')
import('@/pages/SecondPage.vue')
import('@/pages/ThirdPage.vue')
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/Homepage/', component: () => import('@/pages/HomePage.vue') },
  { path: '/Secondpage', component: () => import('@/pages/SecondPage.vue') },
  { path: '/ThirdPage', component: () => import('@/pages/ThirdPage.vue') },
]
//
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
