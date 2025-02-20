<template>
  <button @click="callLogin">Connexion</button>
  <button @click="callGetCharacter">Character</button>
  <p v-if="isConnected">I am connected</p>
  <p>Page principal {{ character }}</p>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { login } from "@/services/auth.service";
import { getCharacter } from "@/services/character.service";

const character: Ref<string | null> = ref(null);
const isConnected: Ref<boolean> = ref(false);

async function callLogin(): Promise<void> {
  await login("myster.gryffus@gmail.com", "test123");
  isConnected.value = true;
}
async function callGetCharacter(): Promise<void> {
  const response = await getCharacter("a5011d8a-de24-4e8c-91cb-91edaa8b6fa7");
  character.value = response.data;
}
</script>
