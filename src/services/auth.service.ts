import { unauthenticatedAxiosInstance } from "@/config/axios";
import store from "@/store";

async function login(email: string, password: string) {
  const response = await unauthenticatedAxiosInstance.post("/login", {
    email: email,
    password: password,
  });
  const token = response.data.data.token;
  await store.dispatch("login", token);
}

export { login };
