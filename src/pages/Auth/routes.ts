import { RouteNameAuthEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const loginRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/Auth/LoginPage.vue'),
    name: RouteNameAuthEnum.LOGIN,
  },
  {
    path: '/register',
    component: () => import('@/pages/Auth/RegisterPage.vue'),
    name: RouteNameAuthEnum.REGISTER,
  },
]
