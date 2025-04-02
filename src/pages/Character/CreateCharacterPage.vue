<template>
  <template v-if="isLoaded">
    <h1>Créer un personnage</h1>
    <form @submit.prevent="handleSubmit">
      <label for="game">Jeu</label>
      <select id="game" v-model="formData.gameId">
        <option disabled value="">Choisissez un jeu</option>
        <option v-for="game in games" :key="game.id" :value="game.id">
          {{ game.name }}
        </option>
      </select>
      <input type="submit" value="Créer un personnage" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouteNameCharacterEnum } from '@/router/router.enum'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { getGames } from '@/pages/Game/game.service'
import { CreateCharacterFormInterface } from './character.interface'
import { createCharacter } from './character.service'

const isLoaded: Ref<boolean> = ref(false)
const router = useRouter()

const games: Ref<GameDtoInterface[]> = ref([])
const formData: Ref<CreateCharacterFormInterface> = ref({
  gameId: '',
})

onBeforeMount(async () => {
  games.value = await getGames()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createCharacter(formData.value)
  await router.push({ name: RouteNameCharacterEnum.CHARACTERS })
}
</script>
