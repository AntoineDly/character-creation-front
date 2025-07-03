import { RouteNameGameEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

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
    path: '/games/create',
    component: () => import('@/pages/Game/CreateGamePage.vue'),
    name: RouteNameGameEnum.CREATE_GAME,
    meta: { requiresAuth: true },
  },
]
