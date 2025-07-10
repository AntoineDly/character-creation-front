<template>
  <div>
    <h1>Créer un objet jouable</h1>
    <LoadingComponent v-model="isLoaded">
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
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { GameDtoInterface } from '@/pages/Game/game.interface'
import { getGames } from '@/pages/Game/game.service'
import { ItemDtoInterface } from '@/pages/Item/item.interface'
import { getItems } from '@/pages/Item/item.service'
import { CreatePlayableItemFormInterface } from '@/pages/PlayableItem/playableItem.interface'
import { createPlayableItem } from '@/pages/PlayableItem/playableItem.service'
import { RouteNamePlayableItemEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const { push } = useRouter()

const items: Ref<ItemDtoInterface[]> = ref([])
const games: Ref<GameDtoInterface[]> = ref([])
const formData: Ref<CreatePlayableItemFormInterface> = ref({
  itemId: '',
  gameId: '',
})

// @todo do like component field => move page to GamePage section and enforcing the gameId when creating a playableItem from a game
// @todo do get all items from user with only id and name
onBeforeMount(async () => {
  items.value = await getItems()
  games.value = await getGames()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createPlayableItem(formData.value)
  await push({ name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS })
}
</script>
