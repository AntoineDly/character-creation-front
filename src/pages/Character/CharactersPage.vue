<template>
  <h1>Liste des personnages</h1>
  <div v-for="character in characters" :key="character.id">
    {{ character.id }}
    {{ character.gameDto.id }}
    {{ character.gameDto.name }}
    <router-link
      :to="{
        name: RouteNameCharacterEnum.CHARACTER,
        params: { characterId: character.id },
      }"
      >Voir le personnage</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { getCharactersWithGame } from "./character.service";
import { CharacterWithGame } from "./character.interface";
import { RouteNameCharacterEnum } from "@/router/routes.enum";

const characters: Ref<CharacterWithGame[]> = ref([]);

onMounted(async () => {
  characters.value = await getCharactersWithGame();
});
</script>
