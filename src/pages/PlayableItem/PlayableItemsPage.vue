<template>
  <div>
    <RouterLink :to="{ name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM }"> Créer un objet jouable </RouterLink>
    <h1>Liste des objets jouables</h1>
    <LoadingComponent v-model="isLoaded">
      <PaginationComponent v-model:pagination="playableItems.paginationDto" />
      <div v-for="playableItem in playableItems.dtos" :key="playableItem.id">
        {{ playableItem.id }}
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { PlayableItemsDtoInterface } from '@/pages/PlayableItem/playableItem.interface'
import { getPlayableItems } from '@/pages/PlayableItem/playableItem.service'
import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const playableItems: Ref<PlayableItemsDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => playableItems.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    playableItems.value = await getPlayableItems(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
