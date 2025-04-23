import { RouteRecordRaw } from 'vue-router'
import { RouteNameGameEnum } from '@/router/router.enum'

export const gameRoutes: RouteRecordRaw[] = [
  {
    path: '/games',
    component: () => import('@/pages/Game/GamesPage.vue'),
    name: RouteNameGameEnum.GAMES,
    meta: { requiresAuth: true },
  },
  {
    path: '/games/:gameId',
    component: () => import('@/pages/Game/GamePage.vue'),
    name: RouteNameGameEnum.GAME,
    meta: { requiresAuth: true },
  },
  {
    path: '/games/:gameId/associate_category',
    component: () => import('@/pages/Game/AssociateCategoryPage.vue'),
    name: RouteNameGameEnum.ASSOCIATE_CATEGORY,
    meta: { requiresAuth: true },
  },
  {
    path: '/games/create',
    component: () => import('@/pages/Game/CreateGamePage.vue'),
    name: RouteNameGameEnum.CREATE_GAME,
    meta: { requiresAuth: true },
  },
]
