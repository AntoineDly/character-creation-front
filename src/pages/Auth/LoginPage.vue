<template>
  <h1>Login Page</h1>
  <form @submit.prevent="handleSubmit">
    <label for="email">Adresse mail</label>
    <input
      id="email"
      type="email"
      placeholder="Email Address"
      v-model="formData.email"
    />
    <label for="password">Mot de passe</label>
    <input
      id="password"
      type="password"
      placeholder="Password"
      v-model="formData.password"
    />
    <input type="submit" value="Submit" />
  </form>
</template>

<script setup lang="ts">
import { login } from "./auth.service";
import { useRouter } from "vue-router";
import { RouteNameHomeEnum } from "@/router/routes.enum";
import { Ref, ref } from "vue";

const router = useRouter();
interface LoginFormData {
  email: string;
  password: string;
}
const formData: Ref<LoginFormData> = ref({
  email: "",
  password: "",
});

async function handleSubmit(): Promise<void> {
  await login(formData.value.email, formData.value.password);
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
