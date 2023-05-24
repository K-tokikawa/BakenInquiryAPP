import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import Login from '@/components/Login.vue'
import Inquiry from '@/components/Inquiry.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component : Login
  },
  {
    path: '/Inquiry/:jsessionid:m',
    name: 'Inquiry',
    component: Inquiry,
    props: (route: RouteLocationNormalized) => ({ jsessionid: route.params.jsessionid, m: route.params.m })
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
