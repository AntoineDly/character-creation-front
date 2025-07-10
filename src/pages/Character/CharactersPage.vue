<template>
  <div>
    <RouterLink :to="{ name: RouteNameCharacterEnum.CREATE_CHARACTER }"> Créer un personnage </RouterLink>
    <h1>Liste des personnages</h1>
    <LoadingComponent v-model="isLoaded">
      <div v-for="character in characters" :key="character.id">
        {{ character.id }}
        {{ character.gameDto.id }}
        {{ character.gameDto.name }}
        <RouterLink
          :to="{
            name: RouteNameCharacterEnum.CHARACTER,
            params: { characterId: character.id },
          }"
        >
          Voir le personnage
        </RouterLink>
      </div>
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CharacterWithGameDtoInterface } from '@/pages/Character/character.interface'
import { getCharactersWithGame } from '@/pages/Character/character.service'
import { RouteNameCharacterEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'

const isLoaded: Ref<boolean> = ref(false)

const characters: Ref<CharacterWithGameDtoInterface[]> = ref([])

onBeforeMount(async () => {
  // add pagination
  characters.value = await getCharactersWithGame()
  isLoaded.value = true
})
</script>
