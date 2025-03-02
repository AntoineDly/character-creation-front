<template>
  <h1>Créer une catégorie</h1>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nom</label>
    <input
      id="name"
      type="text"
      placeholder="Nom de catégorie"
      v-model="formData.name"
    />
    <input type="submit" value="Créer une catégorie" />
  </form>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, Ref } from "vue";
import { RouteNameCategoryEnum } from "@/router/routes.enum";
import { CreateCategoryFormInterface } from "./category.interface";
import { createCategory } from "./category.service";

const router = useRouter();

const formData: Ref<CreateCategoryFormInterface> = ref({
  name: "",
});

async function handleSubmit(): Promise<void> {
  await createCategory(formData.value);
  await router.push({ name: RouteNameCategoryEnum.CATEGORIES });
}
</script>
