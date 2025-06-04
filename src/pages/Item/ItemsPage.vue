<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameItemEnum.CREATE_ITEM }"> Créer un objet </router-link>
    <h1>Liste des objets</h1>
    <PaginationComponent :pagination-dto="items.paginationDto" :route="RouteNameItemEnum.ITEMS" />
    <div v-for="item in items.dtos" :key="item.id">
      {{ item.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { RouteNameItemEnum } from '@/router/router.enum'
import { ItemsDtoInterface } from './item.interface'
import { getItems } from './item.service'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { defaultCollectionValues } from '@/utils'

const isLoaded: Ref<boolean> = ref(false)

const items: Ref<ItemsDtoInterface> = ref(defaultCollectionValues)

onBeforeMount(async () => {
  items.value = await getItems()
  isLoaded.value = true
})
</script>
