<template>
  <div>
    <RouterLink :to="{ name: RouteNameComponentEnum.CREATE_COMPONENT }"> Créer un composant </RouterLink>
    <h1>Liste des composants</h1>
    <LoadingComponent v-model="isLoaded">
      <PaginationComponent v-model:pagination="components.paginationDto" />
      <div v-for="component in components.dtos" :key="component.id">
        {{ component.id }}
        <RouterLink
          :to="{
            name: RouteNameComponentFieldEnum.CREATE_COMPONENT_FIELD,
            params: { componentId: component.id },
          }"
        >
          Créer un champ au composant
        </RouterLink>
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { ComponentsDtoInterface } from '@/pages/Component/component.interface'
import { getComponents } from '@/pages/Component/component.service'
import { RouteNameComponentEnum, RouteNameComponentFieldEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const components: Ref<ComponentsDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => components.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    components.value = await getComponents(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
