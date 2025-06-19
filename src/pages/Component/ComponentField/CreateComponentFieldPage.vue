<template>
  <h1>Créer un champ au composant</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="parameters">Paramètre</label>
      <select id="parameters" v-model="formData.parameterId">
        <option disabled value="">Choisissez un paramètre</option>
        <option v-for="parameter in parameters" :key="parameter.id" :value="parameter.id">
          {{ parameter.name }}
        </option>
      </select>
      <label for="value">Valeur du champ</label>
      <input id="value" v-model="formData.value" type="text" placeholder="Valeur du champ" />
      <input type="submit" value="Créer un champ au composant" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CreateComponentFieldFormInterface } from '@/pages/Component/ComponentField/componentField.interface'
import { createComponentField } from '@/pages/Component/ComponentField/componentField.service'
import { ParameterDtoInterface } from '@/pages/Parameter/parameter.interface'
import { getParameters } from '@/pages/Parameter/parameter.service'
import { RouteNameComponentEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const route = useRoute()
const router = useRouter()

const componentId: Ref<string> = ref(route.params.componentId as string)
const parameters: Ref<ParameterDtoInterface[]> = ref([])
const formData: Ref<CreateComponentFieldFormInterface> = ref({
  componentId: componentId.value,
  parameterId: '',
  value: '',
})

// @todo move page to ComponentPage section and enforcing the componentId when creating an item from a component
// @todo do get all parameters from user with only id and name
onBeforeMount(async () => {
  parameters.value = await getParameters()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createComponentField(formData.value)
  await router.push({ name: RouteNameComponentEnum.COMPONENTS })
}
</script>
