<template>
  <div>
    <h1>Se connecter</h1>
    <LoadingComponent v-model="isLoaded">
      <form @submit.prevent="handleSubmit">
        <label for="email">Adresse mail</label>
        <input id="email" v-model="formData.email" type="email" placeholder="Adresse mail" />
        <label for="password">Mot de passe</label>
        <input id="password" v-model="formData.password" type="password" placeholder="Mot de passe" />
        <input type="submit" value="Se connecter" />
      </form>
    </LoadingComponent>
  </div>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { LoginFormInterface } from '@/pages/Auth/auth.interface'
import { login } from '@/pages/Auth/auth.service'
import { RouteNameHomeEnum } from '@/router/router.enum'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(true)
const { push } = useRouter()

const formData: Ref<LoginFormInterface> = ref({
  email: '',
  password: '',
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await login(formData.value)
  await push({ name: RouteNameHomeEnum.HOME })
}
</script>
