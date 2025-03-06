<template>
  <template v-if="isLoaded">
    <h1>Créer un jeu</h1>
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
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, Ref } from "vue";
import { RouteNameGameEnum } from "@/router/routes.enum";
import { createGame } from "./game.service";
import { CreateGameFormInterface } from "./game.interface";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(true);
const router = useRouter();

const formData: Ref<CreateGameFormInterface> = ref({
  name: "",
  visibleForAll: false,
});

async function handleSubmit(): Promise<void> {
  isLoaded.value = false;
  await createGame(formData.value);
  await router.push({ name: RouteNameGameEnum.GAMES });
}
</script>
