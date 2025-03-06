<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM }"
      >Créer un objet lié</router-link
    >
    <h1>Liste des objets liés</h1>
    <div v-for="linkedItem in linkedItems" :key="linkedItem.id">
      {{ linkedItem.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { RouteNameLinkedItemEnum } from "@/router/routes.enum";
import { LinkedItemDtoInterface } from "./linkedItem.interface";
import { getLinkedItems } from "./linkedItem.service";

const isLoaded: Ref<boolean> = ref(false);

const linkedItems: Ref<LinkedItemDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  linkedItems.value = await getLinkedItems();
  isLoaded.value = true;
});
</script>
