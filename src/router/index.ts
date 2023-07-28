import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import Login from '@/components/Login.vue'
import Inquiry from '@/components/Inquiry.vue'
import Predict from '@/components/Predict.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Login',
    name: 'Login',
    component : Login
  },
  {
    path: '/Inquiry/:jsessionid:m',
    name: 'Inquiry',
    component: Inquiry,
    props: (route: RouteLocationNormalized) => ({ jsessionid: route.params.jsessionid, m: route.params.m })
  },
  {
    path: '/',
    name: 'Predict',
    component: Predict,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
