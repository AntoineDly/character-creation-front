<template>
  <h1>Créer un objet lié</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="playableItem">Objet jouable</label>
      <select id="playableItem" v-model="formData.playableItemId">
        <option disabled value="">Choisissez un objet jouable</option>
        <option v-for="playableItem in playableItems" :key="playableItem.id" :value="playableItem.id">
          {{ playableItem.id }}
        </option>
      </select>
      <label for="character">Personnage</label>
      <select id="character" v-model="formData.characterId">
        <option disabled value="">Choisissez un personnage</option>
        <option v-for="character in characters" :key="character.id" :value="character.id">
          {{ character.id }}
        </option>
      </select>
      <input type="submit" value="Créer un objet lié" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CharacterDtoInterface } from '@/pages/Character/character.interface'
import { getCharacters } from '@/pages/Character/character.service'
import { CreateLinkedItemFormInterface } from '@/pages/LinkedItem/linkedItem.interface'
import { createLinkedItem } from '@/pages/LinkedItem/linkedItem.service'
import { PlayableItemDtoInterface } from '@/pages/PlayableItem/playableItem.interface'
import { getPlayableItems } from '@/pages/PlayableItem/playableItem.service'
import { RouteNameLinkedItemEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const router = useRouter()

const playableItems: Ref<PlayableItemDtoInterface[]> = ref([])
const characters: Ref<CharacterDtoInterface[]> = ref([])
const formData: Ref<CreateLinkedItemFormInterface> = ref({
  playableItemId: '',
  characterId: '',
})

// @todo do like component field => move page to CharacterPage section and enforcing the characterId when creating a linkedItem from a character
// @todo do get all playableItems from user with only id and name
onBeforeMount(async () => {
  playableItems.value = await getPlayableItems()
  characters.value = await getCharacters()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createLinkedItem(formData.value)
  await router.push({ name: RouteNameLinkedItemEnum.LINKED_ITEMS })
}
</script>
