<template>
  <div>
    <router-link
      :to="{
        name: RouteNameGameEnum.CREATE_GAME,
      }"
    >
      Créer un jeu
    </router-link>
    <h1>Liste des jeux</h1>
    <loading-component v-model="isLoaded">
      <pagination-component v-model:pagination="games.paginationDto" />
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
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { GamesDtoInterface } from '@/pages/Game/game.interface'
import { getGames } from '@/pages/Game/game.service'
import { RouteNameGameEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const games: Ref<GamesDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => games.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    games.value = await getGames(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
