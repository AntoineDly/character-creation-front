<template>
  <template v-if="isLoaded">
    <h1>Créer une catégorie</h1>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nom de catégorie</label>
      <input id="name" v-model="formData.name" type="text" placeholder="Nom de catégorie" />
      <input type="submit" value="Créer une catégorie" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, Ref } from 'vue'
import { RouteNameCategoryEnum } from '@/router/router.enum'
import { CreateCategoryFormInterface } from './category.interface'
import { createCategory } from './category.service'
import LoadingComponent from '@/components/LoadingComponent.vue'

const isLoaded: Ref<boolean> = ref(true)
const router = useRouter()

const formData: Ref<CreateCategoryFormInterface> = ref({
  name: '',
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createCategory(formData.value)
  await router.push({ name: RouteNameCategoryEnum.CATEGORIES })
}
</script>
