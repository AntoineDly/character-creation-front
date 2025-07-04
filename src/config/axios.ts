import { useAuthStore } from '@/pages/Auth/authStore'
import router from '@/router'
import { RouteNameHomeEnum } from '@/router/router.enum'
import axios, { InternalAxiosRequestConfig } from 'axios'

const baseAxiosInstanceConfig = {
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
}

const authenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig)

const unauthenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig)

const setAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    return Promise.reject(new Error('Unauthenticated'))
  }
  config.headers['Authorization'] = `Bearer ${authStore.token}`
  return config
}

authenticatedAxiosInstance.interceptors.request.use(
  config => {
    return setAuthorizationHeader(config)
  },
  error => {
    return Promise.reject(error)
  },
)

authenticatedAxiosInstance.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status

    if (status === 401) {
      const authStore = useAuthStore()
      authStore.clearToken()
      router.push({ name: RouteNameHomeEnum.HOME })
    }

    return Promise.reject(error)
  },
)

export { authenticatedAxiosInstance, unauthenticatedAxiosInstance }
