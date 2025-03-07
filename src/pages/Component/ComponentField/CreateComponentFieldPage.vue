<template>
  <template v-if="isLoaded">
    <h1>Créer un champ au composant</h1>
    <form @submit.prevent="handleSubmit">
      <label for="parameters">Paramètre</label>
      <select id="parameters" v-model="formData.parameterId">
        <option disabled value="">Choisissez un paramètre</option>
        <option
          v-for="parameter in parameters"
          :key="parameter.id"
          :value="parameter.id"
        >
          {{ parameter.name }}
        </option>
      </select>
      <label for="value">Valeur du champ</label>
      <input
        id="value"
        type="text"
        placeholder="Valeur du champ"
        v-model="formData.value"
      />
      <input type="submit" value="Créer un champ au composant" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, Ref } from "vue";
import { ParameterDtoInterface } from "@/pages/Parameter/parameter.interface";
import { getParameters } from "@/pages/Parameter/parameter.service";
import { useRoute, useRouter } from "vue-router";
import { RouteNameComponentEnum } from "@/router/router.enum";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { CreateComponentFieldFormInterface } from "@/pages/Component/ComponentField/componentField.interface";
import { createComponentField } from "@/pages/Component/ComponentField/componentField.service";

const isLoaded: Ref<boolean> = ref(false);
const route = useRoute();
const router = useRouter();

const componentId: Ref<string> = ref(route.params.componentId as string);
const parameters: Ref<ParameterDtoInterface[]> = ref([]);
const formData: Ref<CreateComponentFieldFormInterface> = ref({
  componentId: componentId.value,
  parameterId: "",
  value: "",
});

onBeforeMount(async () => {
  parameters.value = await getParameters();
  isLoaded.value = true;
});

async function handleSubmit(): Promise<void> {
  isLoaded.value = false;
  await createComponentField(formData.value);
  await router.push({ name: RouteNameComponentEnum.COMPONENTS });
}
</script>
