<template>
  <div>
    <header v-if="!isAuthenticated">
      <nav>
        <ul>
          <li><router-link :to="{ name: RouteNameHomeEnum.HOME }"> Page d'accueil </router-link></li>
          <li><router-link :to="{ name: RouteNameAuthEnum.REGISTER }"> S'inscrire </router-link></li>
          <li><router-link :to="{ name: RouteNameAuthEnum.LOGIN }"> Se connecter </router-link></li>
        </ul>
      </nav>
    </header>
    <header v-else>
      <nav>
        <ul>
          <li><router-link :to="{ name: RouteNameHomeEnum.HOME }"> Page principal </router-link></li>
          <li><router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"> Liste des personnages </router-link></li>
          <li><router-link :to="{ name: RouteNameGameEnum.GAMES }"> Liste des jeux </router-link></li>
          <li><router-link :to="{ name: RouteNameCategoryEnum.CATEGORIES }"> Liste des catégories </router-link></li>
          <li><router-link :to="{ name: RouteNameComponentEnum.COMPONENTS }"> Liste des composants </router-link></li>
          <li><router-link :to="{ name: RouteNameItemEnum.ITEMS }"> Liste des objets </router-link></li>
          <li>
            <router-link :to="{ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS }">
              Liste des objets jouables
            </router-link>
          </li>
          <li><router-link :to="{ name: RouteNameLinkedItemEnum.LINKED_ITEMS }"> Liste des objets liés </router-link></li>
          <li><router-link :to="{ name: RouteNameParameterEnum.PARAMETERS }"> Liste des paramètres </router-link></li>
        </ul>
      </nav>
      <button @click="handleLogout">Se déconnecter</button>
    </header>
    <main>
      <router-view />
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
