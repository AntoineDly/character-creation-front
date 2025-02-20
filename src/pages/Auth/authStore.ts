import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state): boolean => state.token !== null,
  },
  actions: {
    setToken(inputToken: string): void {
      this.token = inputToken;
    },
    clearToken(): void {
      this.token = null;
    },
  },
});
