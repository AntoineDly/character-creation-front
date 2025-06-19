<template>
  <router-link :to="{ name: RouteNameParameterEnum.CREATE_PARAMETER }"> Créer un paramètre </router-link>
  <h1>Liste des paramètres</h1>
  <template v-if="isLoaded">
    <PaginationComponent v-bind="parameters.paginationDto" />
    <div v-for="parameter in parameters.dtos" :key="parameter.id">
      {{ parameter.id }} | {{ parameter.name }} | {{ parameter.type }}
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
import { ParametersDtoInterface } from '@/pages/Parameter/parameter.interface'
import { getParameters } from '@/pages/Parameter/parameter.service'
import { RouteNameParameterEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)

const parameters: Ref<ParametersDtoInterface> = ref(defaultCollectionValues)

const route = useRoute()
const pagination: UsePaginationInterface = usePagination()
watch(
  () => route.query,
  async () => {
    isLoaded.value = false
    parameters.value = await getParameters(pagination.getQueryParamsFromRoute(route))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
