<template>
  <div>
    <h1>Associer une catégorie</h1>
    <loading-component v-model="isLoaded">
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
        <input type="submit" value="Créer une association entre un jeu et une catégorie" />
      </form>
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CategoryDtoInterface } from '@/pages/Category/category.interface'
import { getAllCategories, getAllCategoriesWithRequestedGame, getCategory } from '@/pages/Category/category.service'
import { CreateCategoryGameFormInterface } from '@/pages/CategoryGame/categoryGame.interface'
import { createCategoryGame } from '@/pages/CategoryGame/categoryGame.service'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { getAllGames, getAllGamesWithoutRequestedCategory, getGame } from '@/pages/Game/game.service'
import { RouteNameHomeEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const { push } = useRouter()

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

const getGames = async () => {
  if (props.gameId !== '') {
    isGameSelectionDisabled.value = true
    games.value[0] = await getGame(props.gameId)
    return
  }

  if (props.categoryId !== '') {
    games.value = await getAllGamesWithoutRequestedCategory({ categoryId: props.categoryId })
    return
  }

  games.value = await getAllGames()
  return
}

const getCategories = async () => {
  if (props.categoryId !== '') {
    isCategorySelectionDisabled.value = true
    categories.value[0] = await getCategory(props.categoryId)
    return
  }

  if (props.gameId !== '') {
    games.value = await getAllCategoriesWithRequestedGame({ gameId: props.gameId })
    return
  }

  categories.value = await getAllCategories()
  return
}

onBeforeMount(async () => {
  await getGames()
  await getCategories()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createCategoryGame(formData.value)
  await push({ name: RouteNameHomeEnum.HOME })
}
</script>
