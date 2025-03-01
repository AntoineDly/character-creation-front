<template>
  <h1>Dashboard Page</h1>
  <nav>
    <router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"
      >Liste des personnages</router-link
    >
    <router-link :to="{ name: RouteNameGameEnum.GAMES }"
      >Liste des jeux</router-link
    >
  </nav>
</template>
<script setup lang="ts">
import {
  RouteNameCharacterEnum,
  RouteNameGameEnum,
} from "@/router/routes.enum";
</script>
