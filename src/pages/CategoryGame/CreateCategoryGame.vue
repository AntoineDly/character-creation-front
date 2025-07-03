<template>
  <h1>Associer une catégorie</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="game">Jeu</label>
      <select id="game" v-model="formData.gameId" :disabled="isGameSelectionDisabled">
        <option disabled value="">Choisissez un jeu</option>
        <option v-for="game in games" :key="game.id" :value="game.id">
          {{ game.name }}
        </option>
      </select>
      <label for="categories">Catégorie</label>
      <select id="categories" v-model="formData.categoryId" :disabled="isCategorySelectionDisabled">
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
import { getAllCategories, getCategory } from '@/pages/Category/category.service'
import { CreateCategoryGameFormInterface } from '@/pages/CategoryGame/categoryGame.interface'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { associateCategory, getAllGames, getGame } from '@/pages/Game/game.service'
import { RouteNameGameEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const router = useRouter()

const isGameSelectionDisabled: Ref<boolean> = ref(false)
const isCategorySelectionDisabled: Ref<boolean> = ref(false)
const categories: Ref<CategoryDtoInterface[]> = ref([])
const games: Ref<GameDtoInterface[]> = ref([])

interface Props {
  gameId?: string
  categoryId?: string
}

const props = withDefaults(defineProps<Props>(), {
  gameId: '',
  categoryId: '',
})

const formData: Ref<CreateCategoryGameFormInterface> = ref({
  gameId: props.gameId,
  categoryId: props.categoryId,
})

onBeforeMount(async () => {
  if (props.gameId !== '') {
    isGameSelectionDisabled.value = true
    games.value[0] = await getGame(props.gameId)
  } else {
    games.value = await getAllGames()
  }
  if (props.categoryId !== '') {
    isCategorySelectionDisabled.value = true
    categories.value[0] = await getCategory(props.categoryId)
  } else {
    categories.value = await getAllCategories()
  }
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await associateCategory(formData.value)
  await router.push({
    name: RouteNameGameEnum.GAME,
    params: { gameId: formData.value.gameId },
  })
}
</script>
