<template>
  <h1>Dashboard Page</h1>
  <router-link :to="{ name: RouteNameCharacterEnum.CHARACTERS }"
    >Liste des personnages</router-link
  >
</template>
<script setup lang="ts">
import { RouteNameCharacterEnum } from "@/router/routes.enum";
</script>
