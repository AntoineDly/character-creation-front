<template>
  <h1>Liste des jeux</h1>
  <div v-for="game in games" :key="game.id">
    {{ game.id }}
    {{ game.name }}
    <router-link
      :to="{
        name: RouteNameGameEnum.GAME,
        params: { gameId: game.id },
      }"
      >Voir le jeu</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { RouteNameGameEnum } from "@/router/routes.enum";
import { GameDtoInterface } from "@/pages/Game/game.interface";
import { onBeforeMount, ref, Ref } from "vue";
import { getGames } from "@/pages/Game/game.service";

const games: Ref<GameDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  games.value = await getGames();
});
</script>
