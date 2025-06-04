<template>
  <template v-if="isLoaded">
    <h1>Liste des catégories</h1>
    <PaginationComponent :pagination-dto="categories.paginationDto" :route="RouteNameCategoryEnum.CATEGORIES" />
    <div v-for="category in categories.dtos" :key="category.id">
      {{ category.id }}
      {{ category.name }}
    </div>
    <router-link :to="{ name: RouteNameCategoryEnum.CREATE_CATEGORY }"> Créer une nouvelle catégorie </router-link>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { CategoriesDtoInterface } from './category.interface'
import { onBeforeMount, ref, Ref } from 'vue'
import { getCategories } from './category.service'
import { RouteNameCategoryEnum } from '@/router/router.enum'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defaultCollectionValues } from '@/utils'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'

const isLoaded: Ref<boolean> = ref(false)

const categories: Ref<CategoriesDtoInterface> = ref(defaultCollectionValues)

onBeforeMount(async () => {
  categories.value = await getCategories()
  isLoaded.value = true
})
</script>
