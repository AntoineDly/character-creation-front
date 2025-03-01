<template>
  <h1>Personnage</h1>
  <p>Id : {{ game.id }}</p>
  <p>Jeu : {{ game.name }}</p>
  <p>Catégories</p>
  <div v-for="category in game.categoryDtos" :key="category.id">
    {{ category.name }}
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import { getGame } from "./game.service";
import { GameWithCategoriesAndItemsDtoInterface } from "./game.interface";
import { useRoute } from "vue-router";

const route = useRoute();
const gameId: Ref<string> = ref(route.params.gameId as string);
const game: Ref<GameWithCategoriesAndItemsDtoInterface> = ref({
  id: "",
  name: "",
  categoryDtos: [],
  itemDtos: [],
});

onBeforeMount(async () => {
  game.value = await getGame(gameId.value);
});
</script>
