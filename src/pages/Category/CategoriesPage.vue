<template>
  <div>
    <RouterLink :to="{ name: RouteNameCategoryEnum.CREATE_CATEGORY }"> Créer une nouvelle catégorie </RouterLink>
    <h1>Liste des catégories</h1>
    <LoadingComponent v-model="isLoaded">
      <PaginationComponent v-model:pagination="categories.paginationDto" />
      <div v-for="category in categories.dtos" :key="category.id">
        {{ category.id }}
        {{ category.name }}
        <RouterLink
          :to="{
            name: RouteNameCategoryGameEnum.CREATE_CATEGORY_GAME,
            query: { categoryId: category.id },
          }"
        >
          Associer un jeu
        </RouterLink>
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { CategoriesDtoInterface } from '@/pages/Category/category.interface'
import { getCategories } from '@/pages/Category/category.service'
import { RouteNameCategoryEnum, RouteNameCategoryGameEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const categories: Ref<CategoriesDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => categories.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    categories.value = await getCategories(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
