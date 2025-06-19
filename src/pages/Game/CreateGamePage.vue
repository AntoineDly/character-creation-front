<template>
  <h1>Créer un jeu</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="name">Nom du jeu</label>
      <input id="name" v-model="formData.name" type="text" placeholder="Nom de jeu" />
      <label for="visibleForAll">Rendre le jeu visible pour tous</label>
      <input id="visibleForAll" v-model="formData.visibleForAll" type="checkbox" />
      <input type="submit" value="Créer un jeu" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { RouteNameGameEnum } from '@/router/router.enum'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CreateGameFormInterface } from '@/pages/Game/game.interface'
import { createGame } from '@/pages/Game/game.service'

const isLoaded: Ref<boolean> = ref(true)
const router = useRouter()

const formData: Ref<CreateGameFormInterface> = ref({
  name: '',
  visibleForAll: false,
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createGame(formData.value)
  await router.push({ name: RouteNameGameEnum.GAMES })
}
</script>
