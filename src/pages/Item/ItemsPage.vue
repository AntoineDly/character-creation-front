<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameItemEnum.CREATE_ITEM }"> Créer un objet </router-link>
    <h1>Liste des objets</h1>
    <div v-for="item in items" :key="item.id">
      {{ item.id }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { RouteNameItemEnum } from '@/router/router.enum'
import { ItemDtoInterface } from './item.interface'
import { getItems } from './item.service'

const isLoaded: Ref<boolean> = ref(false)

const items: Ref<ItemDtoInterface[]> = ref([])

onBeforeMount(async () => {
  items.value = await getItems()
  isLoaded.value = true
})
</script>
