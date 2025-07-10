import { authenticatedAxiosInstance, unauthenticatedAxiosInstance } from '@/config/axios'
import { LoginFormInterface, RegisterFormInterface } from '@/pages/Auth/auth.interface'
import { useAuthStore } from '@/pages/Auth/authStore'

const authStore = useAuthStore()

async function register(data: RegisterFormInterface) {
  await unauthenticatedAxiosInstance.post('/register', data)
}

async function login(data: LoginFormInterface) {
  const response = await unauthenticatedAxiosInstance.post('/login', data)
  const token = response.data.data.token
  authStore.setToken(token)
}

async function logout() {
  await authenticatedAxiosInstance.post('/logout')
  authStore.clearToken()
}

export { login, logout, register }
