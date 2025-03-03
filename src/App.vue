<template>
  <nav>
    <router-link :to="{ name: RouteNameHomeEnum.HOME }"
      >Page principal</router-link
    >
    <div v-if="!authStore.isAuthenticated">
      <router-link :to="{ name: RouteNameAuthEnum.REGISTER }"
        >S'inscrire</router-link
      >
      <router-link :to="{ name: RouteNameAuthEnum.LOGIN }"
        >Se connecter</router-link
      >
    </div>
    <div v-else>
      <router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"
        >Liste des personnages</router-link
      >
      <router-link :to="{ name: RouteNameGameEnum.GAMES }"
        >Liste des jeux</router-link
      >
      <router-link :to="{ name: RouteNameCategoryEnum.CATEGORIES }"
        >Liste des catégories</router-link
      >
      <button @click="handleLogout">Se déconnecter</button>
    </div>
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
  RouteNameGameEnum,
  RouteNameHomeEnum,
} from "@/router/routes.enum";
import router from "@/router/router";
import { logout } from "@/pages/Auth/auth.service";

const authStore = useAuthStore();

async function handleLogout(): Promise<void> {
  await logout();
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
