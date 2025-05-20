<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM }"> Créer un objet jouable </router-link>
    <h1>Liste des objets jouables</h1>
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
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { PlayableItemsDtoInterface } from './playableItem.interface'
import { getPlayableItems } from './playableItem.service'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { defaultCollectionValues } from '@/utils'

const isLoaded: Ref<boolean> = ref(false)

const playableItems: Ref<PlayableItemsDtoInterface> = ref(defaultCollectionValues)

onBeforeMount(async () => {
  playableItems.value = await getPlayableItems()
  isLoaded.value = true
})
</script>
