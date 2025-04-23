import { RouteRecordRaw } from 'vue-router'
import { RouteNameDashboardEnum } from '@/router/router.enum'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/pages/Dashboard/DashboardPage.vue'),
    name: RouteNameDashboardEnum.DASHBOARD,
    meta: { requiresAuth: true },
  },
]
