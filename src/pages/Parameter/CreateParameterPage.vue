<template>
  <div>
    <h1>Créer un paramètre</h1>
    <loading-component v-model="isLoaded">
      <label for="name">Nom du paramètre</label>
      <input id="name" v-model="formData.name" type="text" placeholder="Nom de paramètre" />
      <label for="type">Type</label>
      <select id="type" v-model="formData.type">
        <option disabled value="">Choisissez un type</option>
        <option v-for="type in Object.values(TypeParameterEnum)" :key="type" :value="type">
          {{ type }}
        </option>
      </select>
      <form @submit.prevent="handleSubmit">
        <input type="submit" value="Créer un paramètre" />
      </form>
    </loading-component>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { TypeParameterEnum } from '@/pages/Parameter/parameter.enum'
import { CreateParameterFormInterface } from '@/pages/Parameter/parameter.interface'
import { createParameter } from '@/pages/Parameter/parameter.service'
import { RouteNameParameterEnum } from '@/router/router.enum'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const { push } = useRouter()

const formData: Ref<CreateParameterFormInterface> = ref({
  name: '',
  type: TypeParameterEnum.STRING,
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createParameter(formData.value)
  await push({ name: RouteNameParameterEnum.PARAMETERS })
}
</script>
