<template>
  <div>
    <RouterLink :to="{ name: RouteNameParameterEnum.CREATE_PARAMETER }"> Créer un paramètre </RouterLink>
    <h1>Liste des paramètres</h1>
    <LoadingComponent v-model="isLoaded">
      <PaginationComponent v-model:pagination="parameters.paginationDto" />
      <div v-for="parameter in parameters.dtos" :key="parameter.id">
        {{ parameter.id }} | {{ parameter.name }} | {{ parameter.type }}
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { usePagination } from '@/components/Pagination/usePagination'
import { ParametersDtoInterface } from '@/pages/Parameter/parameter.interface'
import { getParameters } from '@/pages/Parameter/parameter.service'
import { RouteNameParameterEnum } from '@/router/router.enum'
import { defaultCollectionValues } from '@/utils'
import { ref, Ref, watch } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const parameters: Ref<ParametersDtoInterface> = ref(defaultCollectionValues)

const { getQueryParamsFromPaginationDto } = usePagination()
watch(
  () => parameters.value.paginationDto,
  async pagination => {
    isLoaded.value = false
    parameters.value = await getParameters(getQueryParamsFromPaginationDto(pagination))
    isLoaded.value = true
  },
  { deep: true, immediate: true },
)
</script>
