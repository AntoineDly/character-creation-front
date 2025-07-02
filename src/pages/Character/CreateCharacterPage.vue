<template>
  <h1>Créer un personnage</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="game">Jeu</label>
      <select id="game" v-model="formData.gameId" :disabled="!isGameSelectionDisplayed">
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
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CreateCharacterFormInterface } from '@/pages/Character/character.interface'
import { createCharacter } from '@/pages/Character/character.service'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { getAllGames, getGame } from '@/pages/Game/game.service'
import { RouteNameCharacterEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const isGameSelectionDisplayed: Ref<boolean> = ref(true)
const router = useRouter()

const props = defineProps({
  gameId: {
    type: String,
    default: '',
  },
})

const games: Ref<GameDtoInterface[]> = ref([])
const formData: Ref<CreateCharacterFormInterface> = ref({
  gameId: props.gameId,
})

onBeforeMount(async () => {
  if (props.gameId !== '') {
    isGameSelectionDisplayed.value = false
    games.value[0] = await getGame(props.gameId)
  } else {
    games.value = await getAllGames()
  }
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createCharacter(formData.value)
  await router.push({ name: RouteNameCharacterEnum.CHARACTERS })
}
</script>
