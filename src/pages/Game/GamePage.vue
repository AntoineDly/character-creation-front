<template>
  <router-link
    :to="{
      name: RouteNameGameEnum.ASSOCIATE_CATEGORY,
      params: { gameId: game.id },
    }"
  >
    Associer une catégorie
  </router-link>
  <h1>Jeu</h1>
  <template v-if="isLoaded">
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
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { GameWithCategoriesAndPlayableItemsDtoInterface } from '@/pages/Game/game.interface'
import { getGame } from '@/pages/Game/game.service'
import { RouteNameGameEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const route = useRoute()

const gameId: Ref<string> = ref(route.params.gameId as string)
const game: Ref<GameWithCategoriesAndPlayableItemsDtoInterface> = ref({
  id: '',
  name: '',
  categoryDtos: [],
  playableItemDtos: [],
})

onBeforeMount(async () => {
  game.value = await getGame(gameId.value)
  isLoaded.value = true
})
</script>
