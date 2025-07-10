<template>
  <div>
    <h1>Personnage</h1>
    <LoadingComponent v-model="isLoaded">
      <p>Jeu : {{ character.gameDto.name }}</p>
      <p>Catégories</p>
      <ul>
        <li v-for="category in character.categoryForCharacterDtos" :key="category.id">
          {{ category.name }}
          <p>Objets liés</p>
          <ul>
            <li
              v-for="linkedItemForCharacterDto in category.linkedItemForCharacterDtos"
              :key="linkedItemForCharacterDto.id"
            >
              <div v-for="fieldDto in linkedItemForCharacterDto.fieldDtoCollection" :key="fieldDto.id">
                {{ fieldDto.name }} : {{ fieldDto.value }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CharacterWithLinkedItemsDtoInterface } from '@/pages/Character/character.interface'
import { getCharacter } from '@/pages/Character/character.service'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const { params } = useRoute()

const characterId: Ref<string> = ref(params.characterId as string)
const character: Ref<CharacterWithLinkedItemsDtoInterface> = ref({
  id: '',
  gameDto: {
    id: '',
    name: '',
  },
  categoryForCharacterDtos: [],
})

onBeforeMount(async () => {
  character.value = await getCharacter(characterId.value)
  isLoaded.value = true
})
</script>
