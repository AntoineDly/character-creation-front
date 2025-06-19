import { RouteNameComponentEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const componentRoutes: RouteRecordRaw[] = [
  {
    path: '/components',
    component: () => import('@/pages/Component/ComponentsPage.vue'),
    name: RouteNameComponentEnum.COMPONENTS,
    meta: { requiresAuth: true },
  },
  {
    path: '/components/create',
    component: () => import('@/pages/Component/CreateComponentPage.vue'),
    name: RouteNameComponentEnum.CREATE_COMPONENT,
    meta: { requiresAuth: true },
  },
]
