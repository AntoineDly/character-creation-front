<template>
  <h1>Se connecter</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="email">Adresse mail</label>
      <input id="email" v-model="formData.email" type="email" placeholder="Adresse mail" />
      <label for="password">Mot de passe</label>
      <input id="password" v-model="formData.password" type="password" placeholder="Mot de passe" />
      <label for="password_confirmation">Confirmation de mot de passe</label>
      <input
        id="password_confirmation"
        v-model="formData.password_confirmation"
        type="password"
        placeholder="Confirmation de Mot de passe"
      />
      <input type="submit" value="Se connecter" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { RegisterFormInterface } from '@/pages/Auth/auth.interface'
import { register } from '@/pages/Auth/auth.service'
import { RouteNameHomeEnum } from '@/router/router.enum'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const router = useRouter()

const formData: Ref<RegisterFormInterface> = ref({
  email: '',
  password: '',
  password_confirmation: '',
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await register(formData.value)
  await router.push({ name: RouteNameHomeEnum.HOME })
}
</script>
