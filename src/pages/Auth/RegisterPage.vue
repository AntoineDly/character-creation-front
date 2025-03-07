<template>
  <template v-if="isLoaded">
    <h1>Se connecter</h1>
    <form @submit.prevent="handleSubmit">
      <label for="email">Adresse mail</label>
      <input
        id="email"
        type="email"
        placeholder="Adresse mail"
        v-model="formData.email"
      />
      <label for="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        placeholder="Mot de passe"
        v-model="formData.password"
      />
      <label for="password_confirmation">Confirmation de mot de passe</label>
      <input
        id="password_confirmation"
        type="password"
        placeholder="Confirmation de Mot de passe"
        v-model="formData.password_confirmation"
      />
      <input type="submit" value="Se connecter" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>

<script setup lang="ts">
import { register } from "./auth.service";
import { useRouter } from "vue-router";
import { RouteNameHomeEnum } from "@/router/router.enum";
import { Ref, ref } from "vue";
import { RegisterFormInterface } from "./auth.interface";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(true);
const router = useRouter();

const formData: Ref<RegisterFormInterface> = ref({
  email: "",
  password: "",
  password_confirmation: "",
});

async function handleSubmit(): Promise<void> {
  isLoaded.value = false;
  await register(formData.value);
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
