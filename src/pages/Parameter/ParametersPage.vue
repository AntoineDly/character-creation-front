<template>
  <template v-if="isLoaded">
    <router-link :to="{ name: RouteNameParameterEnum.CREATE_PARAMETER }"
      >Créer un paramètre</router-link
    >
    <h1>Liste des paramètres</h1>
    <div v-for="parameter in parameters" :key="parameter.id">
      {{ parameter.id }} | {{ parameter.name }} | {{ parameter.type }}
    </div>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { ParameterDtoInterface } from "./parameter.interface";
import { getParameters } from "./parameter.service";
import { RouteNameParameterEnum } from "@/router/router.enum";

const isLoaded: Ref<boolean> = ref(false);

const parameters: Ref<ParameterDtoInterface[]> = ref([]);

onBeforeMount(async () => {
  parameters.value = await getParameters();
  isLoaded.value = true;
});
</script>
