<template>
  <h1>Page principal</h1>
  <nav>
    <router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"
      >Liste des personnages</router-link
    >
    <router-link :to="{ name: RouteNameGameEnum.GAMES }"
      >Liste des jeux</router-link
    >
    <router-link :to="{ name: RouteNameCategoryEnum.CATEGORIES }"
      >Liste des catégories</router-link
    >
  </nav>
</template>
<script setup lang="ts">
import {
  RouteNameCategoryEnum,
  RouteNameCharacterEnum,
  RouteNameGameEnum,
} from "@/router/routes.enum";
</script>
