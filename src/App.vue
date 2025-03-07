<template>
  <nav v-if="!authStore.isAuthenticated">
    <router-link :to="{ name: RouteNameHomeEnum.HOME }"
      >Page principal</router-link
    >
    <router-link :to="{ name: RouteNameAuthEnum.REGISTER }"
      >S'inscrire</router-link
    >
    <router-link :to="{ name: RouteNameAuthEnum.LOGIN }"
      >Se connecter</router-link
    >
  </nav>
  <nav v-else>
    <router-link :to="{ name: RouteNameHomeEnum.HOME }"
      >Page principal</router-link
    >
    <router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"
      >Liste des personnages</router-link
    >
    <router-link :to="{ name: RouteNameGameEnum.GAMES }"
      >Liste des jeux</router-link
    >
    <router-link :to="{ name: RouteNameCategoryEnum.CATEGORIES }"
      >Liste des catégories</router-link
    >
    <router-link :to="{ name: RouteNameComponentEnum.COMPONENTS }"
      >Liste des composants</router-link
    >
    <router-link :to="{ name: RouteNameItemEnum.ITEMS }"
      >Liste des objets</router-link
    >
    <router-link :to="{ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS }"
      >Liste des objets jouables</router-link
    >
    <router-link :to="{ name: RouteNameLinkedItemEnum.LINKED_ITEMS }"
      >Liste des objets liés</router-link
    >
    <router-link :to="{ name: RouteNameParameterEnum.PARAMETERS }"
      >Liste des paramètres</router-link
    >
    <button @click="handleLogout">Se déconnecter</button>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/pages/Auth/authStore";
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
} from "@/router/router.enum";
import router from "@/router/router";
import { logout } from "@/pages/Auth/auth.service";

const authStore = useAuthStore();

async function handleLogout(): Promise<void> {
  await logout();
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
