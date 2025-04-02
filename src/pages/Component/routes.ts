import { RouteRecordRaw } from 'vue-router'
import { RouteNameComponentEnum } from '@/router/router.enum'
import ComponentsPage from './ComponentsPage.vue'
import CreateComponentPage from './CreateComponentPage.vue'

export const componentRoutes: RouteRecordRaw[] = [
  {
    path: '/components',
    component: ComponentsPage,
    name: RouteNameComponentEnum.COMPONENTS,
    meta: { requiresAuth: true },
  },
  {
    path: '/components/create',
    component: CreateComponentPage,
    name: RouteNameComponentEnum.CREATE_COMPONENT,
    meta: { requiresAuth: true },
  },
]
