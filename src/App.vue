<template>
  <div>
    <header v-if="!isAuthenticated">
      <nav>
        <ul>
          <li><RouterLink :to="{ name: RouteNameHomeEnum.HOME }"> Page d'accueil </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameAuthEnum.REGISTER }"> S'inscrire </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameAuthEnum.LOGIN }"> Se connecter </RouterLink></li>
        </ul>
      </nav>
    </header>
    <header v-else>
      <nav>
        <ul>
          <li><RouterLink :to="{ name: RouteNameHomeEnum.HOME }"> Page principal </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameCharacterEnum.CHARACTERS }"> Liste des personnages </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameGameEnum.GAMES }"> Liste des jeux </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameCategoryEnum.CATEGORIES }"> Liste des catégories </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameComponentEnum.COMPONENTS }"> Liste des composants </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameItemEnum.ITEMS }"> Liste des objets </RouterLink></li>
          <li>
            <RouterLink :to="{ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS }">
              Liste des objets jouables
            </RouterLink>
          </li>
          <li><RouterLink :to="{ name: RouteNameLinkedItemEnum.LINKED_ITEMS }"> Liste des objets liés </RouterLink></li>
          <li><RouterLink :to="{ name: RouteNameParameterEnum.PARAMETERS }"> Liste des paramètres </RouterLink></li>
        </ul>
      </nav>
      <button @click="handleLogout">Se déconnecter</button>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/pages/Auth/auth.service'
import { useAuthStore } from '@/pages/Auth/authStore'
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
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

const { push } = useRouter()

async function handleLogout(): Promise<void> {
  await logout()
  await push({ name: RouteNameHomeEnum.HOME })
}
</script>
