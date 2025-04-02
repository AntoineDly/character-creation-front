<template>
  <template v-if="isLoaded">
    <h1>Créer un objet jouable</h1>
    <form @submit.prevent="handleSubmit">
      <label for="item">Objet</label>
      <select id="item" v-model="formData.itemId">
        <option disabled value="">Choisissez un objet</option>
        <option v-for="item in items" :key="item.id" :value="item.id">
          {{ item.id }}
        </option>
      </select>
      <label for="game">Jeu</label>
      <select id="game" v-model="formData.gameId">
        <option disabled value="">Choisissez un jeu</option>
        <option v-for="game in games" :key="game.id" :value="game.id">
          {{ game.name }}
        </option>
      </select>
      <input type="submit" value="Créer un objet jouable" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { getItems } from '@/pages/Item/item.service'
import { createPlayableItem } from './playableItem.service'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { onBeforeMount, ref, Ref } from 'vue'
import { ItemDtoInterface } from '@/pages/Item/item.interface'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { getGames } from '@/pages/Game/game.service'
import { CreatePlayableItemFormInterface } from './playableItem.interface'

const isLoaded: Ref<boolean> = ref(false)
const router = useRouter()

const items: Ref<ItemDtoInterface[]> = ref([])
const games: Ref<GameDtoInterface[]> = ref([])
const formData: Ref<CreatePlayableItemFormInterface> = ref({
  itemId: '',
  gameId: '',
})

onBeforeMount(async () => {
  items.value = await getItems()
  games.value = await getGames()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createPlayableItem(formData.value)
  await router.push({ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS })
}
</script>
