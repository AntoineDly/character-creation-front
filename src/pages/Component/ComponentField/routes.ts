import { RouteRecordRaw } from 'vue-router'
import CreateComponentFieldPage from './CreateComponentFieldPage.vue'
import { RouteNameComponentFieldEnum } from '@/router/router.enum'

export const componentFieldRoutes: RouteRecordRaw[] = [
  {
    path: '/components/:componentId/component_fields/create',
    component: CreateComponentFieldPage,
    name: RouteNameComponentFieldEnum.CREATE_COMPONENT_FIELD,
    meta: { requiresAuth: true },
  },
]
