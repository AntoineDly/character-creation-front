<template>
  <template v-if="isLoaded">
    <h1>Associer une catégorie</h1>
    <form @submit.prevent="handleSubmit">
      <label for="name">Catégorie</label>

      <select v-model="formData.categoryId">
        <option disabled value="">Choisissez une catégorie</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <input type="submit" value="Associer une catégorie" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import { CategoryDtoInterface } from "@/pages/Category/category.interface";
import { getCategories } from "@/pages/Category/category.service";
import { useRoute, useRouter } from "vue-router";
import { AssociateCategoryFormInterface } from "./game.interface";
import { RouteNameGameEnum } from "@/router/routes.enum";
import { associateCategory } from "./game.service";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(false);
const route = useRoute();
const router = useRouter();

const gameId: Ref<string> = ref(route.params.gameId as string);
const categories: Ref<CategoryDtoInterface[]> = ref([]);
const formData: Ref<AssociateCategoryFormInterface> = ref({
  gameId: gameId.value,
  categoryId: "",
});

onBeforeMount(async () => {
  categories.value = await getCategories();
  isLoaded.value = true;
});

async function handleSubmit(): Promise<void> {
  await associateCategory(formData.value);
  await router.push({
    name: RouteNameGameEnum.GAME,
    params: { gameId: gameId.value },
  });
}
</script>
