<template>
  <router-link :to="{ name: RouteNameItemEnum.CREATE_ITEM }"> Créer un objet </router-link>
  <h1>Liste des objets</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="items.paginationDto" />
    <div v-for="item in items.dtos" :key="item.id">
      {{ item.id }}
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
import { ItemsDtoInterface } from '@/pages/Item/item.interface'
import { getItems } from '@/pages/Item/item.service'
import { RouteNameItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const items: Ref<ItemsDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    items.value = await getItems(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
