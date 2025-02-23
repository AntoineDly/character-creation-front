<template>
  <h1>Dashboard Page</h1>
  <div v-for="character in characters" :key="character.id">
    {{ character.id }}
    {{ character.gameDto.id }}
    {{ character.gameDto.name }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { getCharactersWithGame } from "@/pages/Character/character.service";

interface CharacterWithGame {
  id: string;
  gameDto: Game;
}

interface Game {
  id: string;
  name: string;
}
const characters: Ref<CharacterWithGame[]> = ref([]);

onMounted(async () => {
  const response = await getCharactersWithGame();
  characters.value = response.data;
});
</script>
