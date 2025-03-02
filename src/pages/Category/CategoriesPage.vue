<template>
  <template v-if="isLoaded">
    <h1>Liste des catégories</h1>
    <div v-for="category in categories" :key="category.id">
      {{ category.id }}
      {{ category.name }}
    </div>
    <router-link :to="{ name: RouteNameCategoryEnum.CREATE_CATEGORY }"
      >Créer une nouvelle catégorie</router-link
    >
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { CategoryDtoInterface } from "./category.interface";
import { onBeforeMount, ref, Ref } from "vue";
import { getCategories } from "./category.service";
import { RouteNameCategoryEnum } from "@/router/routes.enum";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(false);

const categories: Ref<CategoryDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  categories.value = await getCategories();
  isLoaded.value = true;
});
</script>
