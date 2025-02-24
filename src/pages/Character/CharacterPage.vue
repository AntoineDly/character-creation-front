<template>
  <h1>Personnage</h1>
  <p>Id : {{ character.id }}</p>
  <p>Jeu : {{ character.gameDto.name }}</p>
  <p>Catégories</p>
  <div
    v-for="category in character.categoryForCharacterDtos"
    :key="category.id"
  >
    {{ category.name }}
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import { getCharacter } from "./character.service";
import { CharacterWithLinkedItems } from "./character.interface";
import { useRoute } from "vue-router";

const route = useRoute();
const characterId: Ref<string> = ref(route.params.characterId as string);
const character: Ref<CharacterWithLinkedItems> = ref({
  id: "",
  gameDto: {
    id: "",
    name: "",
  },
  categoryForCharacterDtos: [],
});

onBeforeMount(async () => {
  character.value = await getCharacter(characterId.value);
});
</script>
