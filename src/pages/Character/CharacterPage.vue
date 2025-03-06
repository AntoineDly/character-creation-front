<template>
  <template v-if="isLoaded">
    <h1>Personnage</h1>
    <p>Id : {{ character.id }}</p>
    <p>Jeu : {{ character.gameDto.name }}</p>
    <p>Catégories</p>
    <div
      v-for="category in character.categoryForCharacterDtos"
      :key="category.id"
    >
      {{ category.name }}
      <p>Objets liés</p>
      <div
        v-for="linkedItemForCharacterDto in category.linkedItemForCharacterDtos"
        :key="linkedItemForCharacterDto.id"
      >
        {{ linkedItemForCharacterDto.id }}
      </div>
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import { getCharacter } from "./character.service";
import { CharacterWithLinkedItemsDtoInterface } from "./character.interface";
import { useRoute } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(false);
const route = useRoute();

const characterId: Ref<string> = ref(route.params.characterId as string);
const character: Ref<CharacterWithLinkedItemsDtoInterface> = ref({
  id: "",
  gameDto: {
    id: "",
    name: "",
  },
  categoryForCharacterDtos: [],
});

onBeforeMount(async () => {
  character.value = await getCharacter(characterId.value);
  isLoaded.value = true;
});
</script>
