<template>
  <router-link :to="{ name: RouteNameCharacterEnum.CREATE_CHARACTER }"> Créer un personnage </router-link>
  <h1>Liste des personnages</h1>
  <template v-if="isLoaded">
    <div v-for="character in characters" :key="character.id">
      {{ character.id }}
      {{ character.gameDto.id }}
      {{ character.gameDto.name }}
      <router-link
        :to="{
          name: RouteNameCharacterEnum.CHARACTER,
          params: { characterId: character.id },
        }"
      >
        Voir le personnage
      </router-link>
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import { getCharactersWithGame } from './character.service'
import { CharacterWithGameDtoInterface } from './character.interface'
import { RouteNameCharacterEnum } from '@/router/router.enum'
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'

const isLoaded: Ref<boolean> = ref(false)

const characters: Ref<CharacterWithGameDtoInterface[]> = ref([])

onBeforeMount(async () => {
  characters.value = await getCharactersWithGame()
  isLoaded.value = true
})
</script>
