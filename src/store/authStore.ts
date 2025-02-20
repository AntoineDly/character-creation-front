import { Ref, ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
  const token: Ref<string | null> = ref(null);
  function setToken(inputToken: string): void {
    token.value = inputToken;
  }
  function clearToken(): void {
    token.value = null;
  }
  function isAuthenticated(): boolean {
    return token.value !== null;
  }

  return {
    token,
    setToken,
    clearToken,
    isAuthenticated,
  };
});
