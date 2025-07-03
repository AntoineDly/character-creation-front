import { RouteNameComponentFieldEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const componentFieldRoutes: RouteRecordRaw[] = [
  {
    path: '/component_fields/create',
    component: () => import('@/pages/ComponentField/CreateComponentFieldPage.vue'),
    name: RouteNameComponentFieldEnum.CREATE_COMPONENT_FIELD,
    meta: { requiresAuth: true },
    props: route => ({
      componentId: route.query.componentId,
    }),
  },
]
