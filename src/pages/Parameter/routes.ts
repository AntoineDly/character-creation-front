import { RouteRecordRaw } from 'vue-router'
import { RouteNameParameterEnum } from '@/router/router.enum'
import ParametersPage from './ParametersPage.vue'
import CreateParameterPage from './CreateParameterPage.vue'

export const parameterRoutes: RouteRecordRaw[] = [
  {
    path: '/parameters',
    component: ParametersPage,
    name: RouteNameParameterEnum.PARAMETERS,
    meta: { requiresAuth: true },
  },
  {
    path: '/parameters/create',
    component: CreateParameterPage,
    name: RouteNameParameterEnum.CREATE_PARAMETER,
    meta: { requiresAuth: true },
  },
]
