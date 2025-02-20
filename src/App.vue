<template>
  <button @click="callGetCharacter">Character</button>
  <p>Page principal {{ character }}</p>
  <h1>Hello App!</h1>
  <nav>
    <router-link :to="{ name: RouteNameHomeEnum.HOME }"
      >Page principal</router-link
    >
    <div v-if="!authStore.isAuthenticated">
      <router-link :to="{ name: RouteNameAuthEnum.LOGIN }"
        >Se connecter</router-link
      >
    </div>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { getCharacter } from "@/pages/Character/character.service";
import { useAuthStore } from "@/pages/Auth/authStore";
import { RouteNameAuthEnum, RouteNameHomeEnum } from "@/router/routes.enum";

const character: Ref<string | null> = ref(null);

const authStore = useAuthStore();

async function callGetCharacter(): Promise<void> {
  const response = await getCharacter("a5011d8a-de24-4e8c-91cb-91edaa8b6fa7");
  character.value = response.data;
}
</script>
