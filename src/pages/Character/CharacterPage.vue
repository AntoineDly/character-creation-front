<template>
  <h1>Personnage</h1>
  {{ character }}
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { getCharacter } from "./character.service";
import { CharacterWithGame } from "./character.interface";
import { useRoute } from "vue-router";

const route = useRoute();
const characterId: Ref<string> = ref(route.params.characterId as string);
const character: Ref<CharacterWithGame[]> = ref([]);

onMounted(async () => {
  character.value = await getCharacter(characterId.value);
});
</script>
