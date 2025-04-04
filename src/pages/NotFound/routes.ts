import { RouteRecordRaw } from 'vue-router'
import { RouteNameNotFoundEnum } from '@/router/router.enum'
import NotFoundPage from './NotFoundPage.vue'

export const notFoundRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
    name: RouteNameNotFoundEnum.NOT_FOUND,
    alias: '/not-found',
  },
]
