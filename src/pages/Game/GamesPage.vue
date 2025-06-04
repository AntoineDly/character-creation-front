<template>
  <router-link
    :to="{
      name: RouteNameGameEnum.CREATE_GAME,
    }"
  >
    Créer un jeu
  </router-link>
  <h1>Liste des jeux</h1>
  <template v-if="isLoaded">
    <PaginationComponent :pagination-dto="games.paginationDto" :route="RouteNameGameEnum.GAMES" />
    <div v-for="game in games.dtos" :key="game.id">
      {{ game.id }}
      {{ game.name }}
      <router-link
        :to="{
          name: RouteNameGameEnum.GAME,
          params: { gameId: game.id },
        }"
      >
        Voir le jeu
      </router-link>
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { RouteNameGameEnum } from '@/router/router.enum'
import { GamesDtoInterface } from './game.interface'
import { onMounted, ref, Ref, watch } from 'vue'
import { getGames } from './game.service'
import LoadingComponent from '@/components/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { defaultCollectionValues } from '@/utils'
import { usePagination } from '@/components/Pagination/UsePagination'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const route = useRoute()

const games: Ref<GamesDtoInterface> = ref(defaultCollectionValues)

onMounted(async () => {
  games.value = await getGames(usePagination(route))
  isLoaded.value = true
})

watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    games.value = await getGames(usePagination(route))
    isLoaded.value = true
  },
  { deep: true },
)
</script>
