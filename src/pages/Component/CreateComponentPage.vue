<template>
  <div>
    <h1>Créer un composant</h1>
    <loading-component v-model="isLoaded">
      <form @submit.prevent="handleSubmit">
        <input type="submit" value="Créer un composant" />
      </form>
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { createComponent } from '@/pages/Component/component.service'
import { RouteNameComponentEnum } from '@/router/router.enum'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const { push } = useRouter()

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createComponent()
  await push({ name: RouteNameComponentEnum.COMPONENTS })
}
</script>
