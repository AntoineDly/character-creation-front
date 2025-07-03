import { RouteNameCategoryGameEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const categoryGameRoutes: RouteRecordRaw[] = [
  {
    path: '/category_games/create',
    component: () => import('@/pages/CategoryGame/CreateCategoryGame.vue'),
    name: RouteNameCategoryGameEnum.CREATE_CATEGORY_GAME,
    meta: { requiresAuth: true },
    props: route => ({
      gameId: route.query.gameId,
      categoryId: route.query.categoryId,
    }),
  },
]
