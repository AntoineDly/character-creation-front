// store/index.ts
import { createStore } from "vuex";

interface State {
  token: string | null;
}

export default createStore<State>({
  state: {
    token: null, // Token is initially null
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token; // Store the token
    },
    clearToken(state) {
      state.token = null; // Clear the token
    },
  },
  actions: {
    login({ commit }, token: string) {
      commit("setToken", token); // Save the token after successful login
    },
    logout({ commit }) {
      commit("clearToken"); // Clear the token on logout
    },
  },
  getters: {
    authToken(state): string | null {
      return state.token; // Return the current token
    },
    isAuthenticated(state): boolean {
      return state.token !== null; // Check if the user is authenticated
    },
  },
});
