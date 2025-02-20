<template>
  <h1>Login Page</h1>
  <button @click="callLogin">Connexion</button>
</template>

<script setup lang="ts">
import { login } from "./auth.service";
import { useRouter } from "vue-router";
import { RouteNameHomeEnum } from "@/router/routes.enum";

const router = useRouter();

async function callLogin(): Promise<void> {
  await login("myster.gryffus@gmail.com", "test123");
  await router.push({ name: RouteNameHomeEnum.HOME });
}
</script>
