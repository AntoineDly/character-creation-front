<template>
  <RouterLink :to="{ name: RouteNameCategoryEnum.CREATE_CATEGORY }"> Créer une nouvelle catégorie </RouterLink>
  <h1>Liste des catégories</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="categories.paginationDto" />
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
import { CategoriesDtoInterface } from '@/pages/Category/category.interface'
import { getCategories } from '@/pages/Category/category.service'
import { RouteNameCategoryEnum, RouteNameCategoryGameEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const categories: Ref<CategoriesDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    categories.value = await getCategories(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
