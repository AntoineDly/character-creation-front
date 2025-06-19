import { RouteNameLinkedItemEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const linkedItemRoutes: RouteRecordRaw[] = [
  {
    path: '/linked_items',
    component: () => import('@/pages/LinkedItem/LinkedItemsPage.vue'),
    name: RouteNameLinkedItemEnum.LINKED_ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: '/linked_items/create',
    component: () => import('@/pages/LinkedItem/CreateLinkedItemPage.vue'),
    name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM,
    meta: { requiresAuth: true },
  },
]
