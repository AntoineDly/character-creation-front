import { RouteNameCategoryEnum } from '@/router/router.enum'
import { RouteRecordRaw } from 'vue-router'

export const categoryRoutes: RouteRecordRaw[] = [
  {
    path: '/categories',
    component: () => import('@/pages/Category/CategoriesPage.vue'),
    name: RouteNameCategoryEnum.CATEGORIES,
    meta: { requiresAuth: true },
  },
  {
    path: '/categories/create',
    component: () => import('@/pages/Category/CreateCategoryPage.vue'),
    name: RouteNameCategoryEnum.CREATE_CATEGORY,
    meta: { requiresAuth: true },
  },
]
