<template>
  <template v-if="isLoaded">
    <router-link
      :to="{
        name: RouteNameGameEnum.CREATE_GAME,
      }"
      >Créer un jeu</router-link
    >
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
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { RouteNameGameEnum } from "@/router/router.enum";
import { GameDtoInterface } from "./game.interface";
import { onBeforeMount, ref, Ref } from "vue";
import { getGames } from "./game.service";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(false);

const games: Ref<GameDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  games.value = await getGames();
  isLoaded.value = true;
});
</script>
