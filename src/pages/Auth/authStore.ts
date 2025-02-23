import { defineStore } from "pinia";
import { computed, ref, Ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const token: Ref<string | null> = ref(null);
  if (localStorage.getItem("token") !== null) {
    token.value = localStorage.getItem("token");
  }
  const isAuthenticated: Ref<boolean | null> = computed(() => {
    return token.value !== null;
  });
  const setToken = (input: string) => {
    token.value = input;
    if (token.value !== null) {
      localStorage.setItem("token", token.value);
    }
  };
  const clearToken = () => {
    token.value = null;
    localStorage.removeItem("token");
  };
  return {
    token,
    isAuthenticated,
    setToken,
    clearToken,
  };
});
