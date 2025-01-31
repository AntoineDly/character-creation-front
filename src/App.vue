<template>
  <button @click="callLogin">Connexion</button>
  <button @click="callGetCharacter">Character</button>
  <p>Page principal {{ character }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/services/auth.service";
import { getCharacter } from "@/services/character.service";

const character = ref("");

async function callLogin() {
  await login("myster.gryffus@gmail.com", "test123");
}
async function callGetCharacter() {
  const response = await getCharacter("a5011d8a-de24-4e8c-91cb-91edaa8b6fa7");
  character.value = response.data;
}
</script>
