import { unauthenticatedAxiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/authStore";

async function login(email: string, password: string) {
  const authStore = useAuthStore();
  const response = await unauthenticatedAxiosInstance.post("/login", {
    email: email,
    password: password,
  });
  const token = response.data.data.token;
  authStore.setToken(token);
}

export { login };
