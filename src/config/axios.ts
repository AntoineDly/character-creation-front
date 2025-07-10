import { useAuthStore } from '@/pages/Auth/authStore'
import { RouteNameHomeEnum } from '@/router/router.enum'
import axios, { InternalAxiosRequestConfig } from 'axios'
import { storeToRefs } from 'pinia'

const baseAxiosInstanceConfig = {
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
}

const authenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig)

const unauthenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig)

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

const setAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  if (!isAuthenticated) {
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
      push({ name: RouteNameHomeEnum.HOME })
    }

    return Promise.reject(error)
  },
)

export { authenticatedAxiosInstance, unauthenticatedAxiosInstance }
