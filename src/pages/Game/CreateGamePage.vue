<template>
  <h1>Créer une catégorie</h1>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nom du jeu</label>
    <input
      id="name"
      type="text"
      placeholder="Nom de jeu"
      v-model="formData.name"
    />
    <label for="visibleForAll">Rendre le jeu visible pour tous</label>
    <input
      id="visibleForAll"
      type="checkbox"
      v-model="formData.visibleForAll"
    />
    <input type="submit" value="Créer un jeu" />
  </form>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, Ref } from "vue";
import { RouteNameGameEnum } from "@/router/routes.enum";
import { createGame } from "./game.service";
import { CreateGameFormInterface } from "./game.interface";

const router = useRouter();

const formData: Ref<CreateGameFormInterface> = ref({
  name: "",
  visibleForAll: false,
});

async function handleSubmit(): Promise<void> {
  await createGame(formData.value);
  await router.push({ name: RouteNameGameEnum.GAMES });
}
</script>
