<template>
  <router-link :to="{ name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM }"> Créer un objet jouable </router-link>
  <h1>Liste des objets jouables</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="playableItems.paginationDto" />
    <div v-for="playableItem in playableItems.dtos" :key="playableItem.id">
      {{ playableItem.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { UsePaginationInterface } from '@/components/Pagination/pagination.interface'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/UsePagination'
import { PlayableItemsDtoInterface } from '@/pages/PlayableItem/playableItem.interface'
import { getPlayableItems } from '@/pages/PlayableItem/playableItem.service'
import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const playableItems: Ref<PlayableItemsDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    playableItems.value = await getPlayableItems(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
