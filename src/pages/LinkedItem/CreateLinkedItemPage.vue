<template>
  <template v-if="isLoaded">
    <h1>Créer un objet lié</h1>
    <form @submit.prevent="handleSubmit">
      <label for="playableItem">Objet jouable</label>
      <select id="playableItem" v-model="formData.playableItemId">
        <option disabled value="">Choisissez un objet jouable</option>
        <option
          v-for="playableItem in playableItems"
          :key="playableItem.id"
          :value="playableItem.id"
        >
          {{ playableItem.id }}
        </option>
      </select>
      <label for="character">Personnage</label>
      <select id="character" v-model="formData.characterId">
        <option disabled value="">Choisissez un personnage</option>
        <option
          v-for="character in characters"
          :key="character.id"
          :value="character.id"
        >
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
import { useRouter } from "vue-router";
import { RouteNameLinkedItemEnum } from "@/router/router.enum";
import { getPlayableItems } from "@/pages/PlayableItem/playableItem.service";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { onBeforeMount, ref, Ref } from "vue";
import { CharacterDtoInterface } from "@/pages/Character/character.interface";
import { getCharacters } from "@/pages/Character/character.service";
import { PlayableItemDtoInterface } from "@/pages/PlayableItem/playableItem.interface";
import { CreateLinkedItemFormInterface } from "@/pages/LinkedItem/linkedItem.interface";
import { createLinkedItem } from "@/pages/LinkedItem/linkedItem.service";

const isLoaded: Ref<boolean> = ref(false);
const router = useRouter();

const playableItems: Ref<PlayableItemDtoInterface[]> = ref([]);
const characters: Ref<CharacterDtoInterface[]> = ref([]);
const formData: Ref<CreateLinkedItemFormInterface> = ref({
  playableItemId: "",
  characterId: "",
});

onBeforeMount(async () => {
  playableItems.value = await getPlayableItems();
  characters.value = await getCharacters();
  isLoaded.value = true;
});

async function handleSubmit(): Promise<void> {
  isLoaded.value = false;
  await createLinkedItem(formData.value);
  await router.push({ name: RouteNameLinkedItemEnum.LINKED_ITEMS });
}
</script>
