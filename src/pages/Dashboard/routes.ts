import { RouteRecordRaw } from 'vue-router'
import DashboardPage from './DashboardPage.vue'
import { RouteNameDashboardEnum } from '@/router/router.enum'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: DashboardPage,
    name: RouteNameDashboardEnum.DASHBOARD,
    meta: { requiresAuth: true },
  },
]
