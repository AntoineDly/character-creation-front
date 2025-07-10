<template>
  <div>
    <h1>Créer une catégorie</h1>
    <LoadingComponent v-model="isLoaded">
      <form @submit.prevent="handleSubmit">
        <label for="name">Nom de catégorie</label>
        <input id="name" v-model="formData.name" type="text" placeholder="Nom de catégorie" />
        <input type="submit" value="Créer une catégorie" />
      </form>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CreateCategoryFormInterface } from '@/pages/Category/category.interface'
import { createCategory } from '@/pages/Category/category.service'
import { RouteNameCategoryEnum } from '@/router/router.enum'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const { push } = useRouter()

const formData: Ref<CreateCategoryFormInterface> = ref({
  name: '',
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createCategory(formData.value)
  await push({ name: RouteNameCategoryEnum.CATEGORIES })
}
</script>
