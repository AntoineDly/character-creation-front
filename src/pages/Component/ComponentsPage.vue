<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameComponentEnum.CREATE_COMPONENT }"> Créer un composant </router-link>
    <h1>Liste des composants</h1>
    <div v-for="component in components" :key="component.id">
      {{ component.id }}
      <router-link
        :to="{
          name: RouteNameComponentFieldEnum.CREATE_COMPONENT_FIELD,
          params: { componentId: component.id },
        }"
      >
        Créer un champ au composant
      </router-link>
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { ComponentDtoInterface } from './component.interface'
import { getComponents } from './component.service'
import { RouteNameComponentEnum, RouteNameComponentFieldEnum } from '@/router/router.enum'

const isLoaded: Ref<boolean> = ref(false)

const components: Ref<ComponentDtoInterface[]> = ref([])

onBeforeMount(async () => {
  components.value = await getComponents()
  isLoaded.value = true
})
</script>
