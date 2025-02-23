import {
  authenticatedAxiosInstance,
  unauthenticatedAxiosInstance,
} from "@/config/axios";
import { useAuthStore } from "./authStore";

async function login(email: string, password: string) {
  const authStore = useAuthStore();
  const response = await unauthenticatedAxiosInstance.post("/login", {
    email: email,
    password: password,
  });
  const token = response.data.data.token;
  authStore.setToken(token);
}

async function logout() {
  const authStore = useAuthStore();
  await authenticatedAxiosInstance.post("/logout");
  authStore.clearToken();
}

export { login, logout };
