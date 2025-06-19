<template>
  <router-link :to="{ name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM }"> Créer un objet lié </router-link>
  <h1>Liste des objets liés</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="linkedItems.paginationDto" />
    <div v-for="linkedItem in linkedItems.dtos" :key="linkedItem.id">
      {{ linkedItem.id }}
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
import { LinkedItemsDtoInterface } from '@/pages/LinkedItem/linkedItem.interface'
import { getLinkedItems } from '@/pages/LinkedItem/linkedItem.service'
import { RouteNameLinkedItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const linkedItems: Ref<LinkedItemsDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    linkedItems.value = await getLinkedItems(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
