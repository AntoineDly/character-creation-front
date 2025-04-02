import { RouteRecordRaw } from 'vue-router'
import { RouteNameCharacterEnum } from '@/router/router.enum'
import CharactersPage from './CharactersPage.vue'
import CharacterPage from './CharacterPage.vue'
import CreateCharacterPage from './CreateCharacterPage.vue'

export const characterRoutes: RouteRecordRaw[] = [
  {
    path: '/characters',
    component: CharactersPage,
    name: RouteNameCharacterEnum.CHARACTERS,
    meta: { requiresAuth: true },
  },
  {
    path: '/characters/:characterId',
    component: CharacterPage,
    name: RouteNameCharacterEnum.CHARACTER,
    meta: { requiresAuth: true },
  },
  {
    path: '/characters/create',
    component: CreateCharacterPage,
    name: RouteNameCharacterEnum.CREATE_CHARACTER,
    meta: { requiresAuth: true },
  },
]
