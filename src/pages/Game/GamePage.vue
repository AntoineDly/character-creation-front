<template>
  <div>
    <router-link
      :to="{
        name: RouteNameCategoryGameEnum.CREATE_CATEGORY_GAME,
        query: { gameId: game.id },
      }"
    >
      Associer une catégorie
    </router-link>
    <router-link
      :to="{
        name: RouteNameCharacterEnum.CREATE_CHARACTER,
        query: { gameId: game.id },
      }"
    >
      Créer un personnage
    </router-link>
    <h1>Jeu</h1>
    <loading-component v-model="isLoaded">
      <p>Id : {{ game.id }}</p>
      <p>Jeu : {{ game.name }}</p>
      <p>Catégories</p>
      <ul>
        <li v-for="category in game.categoryDtos" :key="category.id">
          {{ category.name }}
        </li>
      </ul>
      <p>Objets jouables</p>
      <ul>
        <li v-for="playableItem in game.playableItemDtos" :key="playableItem.id">
          {{ playableItem.id }}
        </li>
      </ul>
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { GameWithCategoriesAndPlayableItemsDtoInterface } from '@/pages/Game/game.interface'
import { getGameWithCategoriesAndPlayableItems } from '@/pages/Game/game.service'
import { RouteNameCategoryGameEnum, RouteNameCharacterEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const { params } = useRoute()

const gameId: Ref<string> = ref(params.gameId as string)
const game: Ref<GameWithCategoriesAndPlayableItemsDtoInterface> = ref({
  id: '',
  name: '',
  categoryDtos: [],
  playableItemDtos: [],
})

onBeforeMount(async () => {
  game.value = await getGameWithCategoriesAndPlayableItems(gameId.value)
  isLoaded.value = true
})
</script>
