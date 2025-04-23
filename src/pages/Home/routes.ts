import { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/pages/Auth/authStore'
import { RouteNameDashboardEnum, RouteNameHomeEnum } from '@/router/router.enum'

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/Home/HomePage.vue'),
    name: RouteNameHomeEnum.HOME,
    alias: '/home',
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if (authStore.isAuthenticated) {
        next({ name: RouteNameDashboardEnum.DASHBOARD })
      } else {
        next()
      }
    },
  },
]
