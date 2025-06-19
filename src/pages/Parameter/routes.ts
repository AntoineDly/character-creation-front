import { RouteNameParameterEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const parameterRoutes: RouteRecordRaw[] = [
  {
    path: '/parameters',
    component: () => import('@/pages/Parameter/ParametersPage.vue'),
    name: RouteNameParameterEnum.PARAMETERS,
    meta: { requiresAuth: true },
  },
  {
    path: '/parameters/create',
    component: () => import('@/pages/Parameter/CreateParameterPage.vue'),
    name: RouteNameParameterEnum.CREATE_PARAMETER,
    meta: { requiresAuth: true },
  },
]
