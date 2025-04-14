import { RouteRecordRaw } from 'vue-router'
import { RouteNameComponentFieldEnum } from '@/router/router.enum'

export const componentFieldRoutes: RouteRecordRaw[] = [
  {
    path: '/components/:componentId/component_fields/create',
    component: () => import('@/pages/Component/ComponentField/CreateComponentFieldPage.vue'),
    name: RouteNameComponentFieldEnum.CREATE_COMPONENT_FIELD,
    meta: { requiresAuth: true },
  },
]
