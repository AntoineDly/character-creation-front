import { authenticatedAxiosInstance, unauthenticatedAxiosInstance } from '@/config/axios'
import { useAuthStore } from './authStore'
import { LoginFormInterface, RegisterFormInterface } from './auth.interface'

async function register(data: RegisterFormInterface) {
  await unauthenticatedAxiosInstance.post('/register', data)
}

async function login(data: LoginFormInterface) {
  const authStore = useAuthStore()
  const response = await unauthenticatedAxiosInstance.post('/login', data)
  const token = response.data.data.token
  authStore.setToken(token)
}

async function logout() {
  const authStore = useAuthStore()
  await authenticatedAxiosInstance.post('/logout')
  authStore.clearToken()
}

export { register, login, logout }
