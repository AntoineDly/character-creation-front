<template>
  <div>
    <RouterLink :to="{ name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM }"> Créer un objet lié </RouterLink>
    <h1>Liste des objets liés</h1>
    <LoadingComponent v-model="isLoaded">
      <PaginationComponent v-model:pagination="linkedItems.paginationDto" />
      <div v-for="linkedItem in linkedItems.dtos" :key="linkedItem.id">
        {{ linkedItem.id }}
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { LinkedItemsDtoInterface } from '@/pages/LinkedItem/linkedItem.interface'
import { getLinkedItems } from '@/pages/LinkedItem/linkedItem.service'
import { RouteNameLinkedItemEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const linkedItems: Ref<LinkedItemsDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => linkedItems.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    linkedItems.value = await getLinkedItems(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
