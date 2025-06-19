<template>
  <h1>Associer une catégorie</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="categories">Catégorie</label>
      <select id="categories" v-model="formData.categoryId">
        <option disabled value="">Choisissez une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
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
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CategoryDtoInterface } from '@/pages/Category/category.interface'
import { getCategories } from '@/pages/Category/category.service'
import { AssociateCategoryFormInterface } from '@/pages/Game/game.interface'
import { associateCategory } from '@/pages/Game/game.service'
import { RouteNameGameEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// @todo do get all categories that aren't in the game from user with only id and name
const isLoaded: Ref<boolean> = ref(false)
const route = useRoute()
const router = useRouter()

const gameId: Ref<string> = ref(route.params.gameId as string)
const categories: Ref<CategoryDtoInterface[]> = ref([])
const formData: Ref<AssociateCategoryFormInterface> = ref({
  gameId: gameId.value,
  categoryId: '',
})

onBeforeMount(async () => {
  categories.value = await getCategories()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await associateCategory(formData.value)
  await router.push({
    name: RouteNameGameEnum.GAME,
    params: { gameId: gameId.value },
  })
}
</script>
