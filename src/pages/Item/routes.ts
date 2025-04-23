import { RouteRecordRaw } from 'vue-router'
import { RouteNameItemEnum } from '@/router/router.enum'

export const itemRoutes: RouteRecordRaw[] = [
  {
    path: '/items',
    component: () => import('@/pages/Item/ItemsPage.vue'),
    name: RouteNameItemEnum.ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: '/items/create',
    component: () => import('@/pages/Item/CreateItemPage.vue'),
    name: RouteNameItemEnum.CREATE_ITEM,
    meta: { requiresAuth: true },
  },
]
