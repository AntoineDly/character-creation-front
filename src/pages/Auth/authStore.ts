import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const token: Ref<string | null> = ref(null)
    const isAuthenticated: Ref<boolean | null> = computed(() => {
      return token.value !== null
    })
    const setToken = (input: string) => {
      token.value = input
    }
    const clearToken = () => {
      token.value = null
    }
    return {
      token,
      isAuthenticated,
      setToken,
      clearToken,
    }
  },
  { persist: true },
)
