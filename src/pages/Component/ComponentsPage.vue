<template>
  <RouterLink :to="{ name: RouteNameComponentEnum.CREATE_COMPONENT }"> Créer un composant </RouterLink>
  <h1>Liste des composants</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="components.paginationDto" />
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
import { ComponentsDtoInterface } from '@/pages/Component/component.interface'
import { getComponents } from '@/pages/Component/component.service'
import { RouteNameComponentEnum, RouteNameComponentFieldEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const components: Ref<ComponentsDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    components.value = await getComponents(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
