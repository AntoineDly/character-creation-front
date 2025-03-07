<template>
  <template v-if="isLoaded">
    <h1>Créer un composant</h1>
    <form @submit.prevent="handleSubmit">
      <input type="submit" value="Créer un composant" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouteNameComponentEnum } from "@/router/router.enum";
import { createComponent } from "@/pages/Component/component.service";
import { ref, Ref } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const isLoaded: Ref<boolean> = ref(true);
const router = useRouter();

async function handleSubmit(): Promise<void> {
  isLoaded.value = false;
  await createComponent();
  await router.push({ name: RouteNameComponentEnum.COMPONENTS });
}
</script>
