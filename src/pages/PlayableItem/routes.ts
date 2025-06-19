import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const playableItemRoutes: RouteRecordRaw[] = [
  {
    path: '/playable_items',
    component: () => import('@/pages/PlayableItem/PlayableItemsPage.vue'),
    name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: '/playable_items/create',
    component: () => import('@/pages/PlayableItem/CreatePlayableItemPage.vue'),
    name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM,
    meta: { requiresAuth: true },
  },
]
