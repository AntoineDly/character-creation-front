import { RouteRecordRaw } from 'vue-router'
import { RouteNameCharacterEnum } from '@/router/router.enum'

export const characterRoutes: RouteRecordRaw[] = [
  {
    path: '/characters',
    component: () => import('@/pages/Character/CharactersPage.vue'),
    name: RouteNameCharacterEnum.CHARACTERS,
    meta: { requiresAuth: true },
  },
  {
    path: '/characters/:characterId',
    component: () => import('@/pages/Character/CharacterPage.vue'),
    name: RouteNameCharacterEnum.CHARACTER,
    meta: { requiresAuth: true },
  },
  {
    path: '/characters/create',
    component: () => import('@/pages/Character/CreateCharacterPage.vue'),
    name: RouteNameCharacterEnum.CREATE_CHARACTER,
    meta: { requiresAuth: true },
  },
]
