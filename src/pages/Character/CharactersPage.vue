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
