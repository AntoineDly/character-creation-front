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
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { ParametersDtoInterface } from './parameter.interface'
import { getParameters } from './parameter.service'
import { RouteNameParameterEnum } from '@/router/router.enum'
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
import { defaultCollectionValues } from '@/utils'

const isLoaded: Ref<boolean> = ref(false)

const parameters: Ref<ParametersDtoInterface> = ref(defaultCollectionValues)

onBeforeMount(async () => {
  parameters.value = await getParameters()
  isLoaded.value = true
})
</script>
