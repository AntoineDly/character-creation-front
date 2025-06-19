<template>
  <h1>Créer un composant</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <input type="submit" value="Créer un composant" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { createComponent } from '@/pages/Component/component.service'
import { RouteNameComponentEnum } from '@/router/router.enum'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const router = useRouter()

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createComponent()
  await router.push({ name: RouteNameComponentEnum.COMPONENTS })
}
</script>
