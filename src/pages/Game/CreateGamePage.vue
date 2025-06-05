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
import { useRouter } from 'vue-router'
import { ref, Ref } from 'vue'
import { RouteNameGameEnum } from '@/router/router.enum'
import { createGame } from './game.service'
import { CreateGameFormInterface } from './game.interface'
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'

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
