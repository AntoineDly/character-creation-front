import { RouteNameDashboardEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/pages/Dashboard/DashboardPage.vue'),
    name: RouteNameDashboardEnum.DASHBOARD,
    meta: { requiresAuth: true },
  },
]
