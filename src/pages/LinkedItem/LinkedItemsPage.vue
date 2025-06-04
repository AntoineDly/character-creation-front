<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM }"> Créer un objet lié </router-link>
    <h1>Liste des objets liés</h1>
    <PaginationComponent :pagination-dto="linkedItems.paginationDto" :route="RouteNameLinkedItemEnum.LINKED_ITEMS" />
    <div v-for="linkedItem in linkedItems.dtos" :key="linkedItem.id">
      {{ linkedItem.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { RouteNameLinkedItemEnum } from '@/router/router.enum'
import { LinkedItemsDtoInterface } from './linkedItem.interface'
import { getLinkedItems } from './linkedItem.service'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { defaultCollectionValues } from '@/utils'

const isLoaded: Ref<boolean> = ref(false)

const linkedItems: Ref<LinkedItemsDtoInterface> = ref(defaultCollectionValues)

onBeforeMount(async () => {
  linkedItems.value = await getLinkedItems()
  isLoaded.value = true
})
</script>
