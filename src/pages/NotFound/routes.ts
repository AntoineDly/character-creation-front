import { RouteNameNotFoundEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const notFoundRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    component: () => import('@/pages/NotFound/NotFoundPage.vue'),
    name: RouteNameNotFoundEnum.NOT_FOUND,
    alias: '/not-found',
  },
]
