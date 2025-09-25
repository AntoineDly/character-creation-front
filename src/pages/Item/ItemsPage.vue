<template>
  <div>
    <router-link :to="{ name: RouteNameItemEnum.CREATE_ITEM }"> Créer un objet </router-link>
    <h1>Liste des objets</h1>
    <loading-component v-model="isLoaded">
      <pagination-component v-model:pagination="items.paginationDto" />
      <div v-for="item in items.dtos" :key="item.id">
        {{ item.id }}
      </div>
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { ItemsDtoInterface } from '@/pages/Item/item.interface'
import { getItems } from '@/pages/Item/item.service'
import { RouteNameItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const items: Ref<ItemsDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => items.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    items.value = await getItems(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
