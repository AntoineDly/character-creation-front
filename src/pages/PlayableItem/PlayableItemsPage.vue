<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM }"
      >Créer un objet jouable</router-link
    >
    <h1>Liste des objets jouables</h1>
    <div v-for="playableItem in playableItems" :key="playableItem.id">
      {{ playableItem.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { RouteNamePlayableItemEnum } from "@/router/routes.enum";
import { PlayableItemDtoInterface } from "./playableItem.interface";
import { getPlayableItems } from "./playableItem.service";

const isLoaded: Ref<boolean> = ref(false);

const playableItems: Ref<PlayableItemDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  playableItems.value = await getPlayableItems();
  isLoaded.value = true;
});
</script>
