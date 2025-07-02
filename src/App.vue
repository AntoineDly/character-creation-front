<template>
  <nav v-if="!authStore.isAuthenticated">
    <RouterLink :to="{ name: RouteNameHomeEnum.HOME }"> Page principal </RouterLink>
    <RouterLink :to="{ name: RouteNameAuthEnum.REGISTER }"> S'inscrire </RouterLink>
    <RouterLink :to="{ name: RouteNameAuthEnum.LOGIN }"> Se connecter </RouterLink>
  </nav>
  <nav v-else>
    <RouterLink :to="{ name: RouteNameHomeEnum.HOME }"> Page principal </RouterLink>
    <RouterLink :to="{ name: RouteNameCharacterEnum.CHARACTERS }"> Liste des personnages </RouterLink>
    <RouterLink :to="{ name: RouteNameGameEnum.GAMES }"> Liste des jeux </RouterLink>
    <RouterLink :to="{ name: RouteNameCategoryEnum.CATEGORIES }"> Liste des catégories </RouterLink>
    <RouterLink :to="{ name: RouteNameComponentEnum.COMPONENTS }"> Liste des composants </RouterLink>
    <RouterLink :to="{ name: RouteNameItemEnum.ITEMS }"> Liste des objets </RouterLink>
    <RouterLink :to="{ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS }"> Liste des objets jouables </RouterLink>
    <RouterLink :to="{ name: RouteNameLinkedItemEnum.LINKED_ITEMS }"> Liste des objets liés </RouterLink>
    <RouterLink :to="{ name: RouteNameParameterEnum.PARAMETERS }"> Liste des paramètres </RouterLink>
    <button @click="handleLogout">Se déconnecter</button>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { logout } from '@/pages/Auth/auth.service'
import { useAuthStore } from '@/pages/Auth/authStore'
import index from '@/router'
import {
  RouteNameAuthEnum,
  RouteNameCategoryEnum,
  RouteNameCharacterEnum,
  RouteNameComponentEnum,
  RouteNameGameEnum,
  RouteNameHomeEnum,
  RouteNameItemEnum,
  RouteNameLinkedItemEnum,
  RouteNameParameterEnum,
  RouteNamePlayableItemEnum,
} from '@/router/router.enum'

const authStore = useAuthStore()

async function handleLogout(): Promise<void> {
  await logout()
  await index.push({ name: RouteNameHomeEnum.HOME })
}
</script>
