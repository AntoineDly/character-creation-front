<template>
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

<script setup lang="ts">
import { register } from "./auth.service";
import { useRouter } from "vue-router";
import { RouteNameHomeEnum } from "@/router/routes.enum";
import { Ref, ref } from "vue";
import { RegisterFormInterface } from "./auth.interface";

const router = useRouter();
const formData: Ref<RegisterFormInterface> = ref({
  email: "",
  password: "",
  password_confirmation: "",
});

async function handleSubmit(): Promise<void> {
  await register(formData.value);
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
