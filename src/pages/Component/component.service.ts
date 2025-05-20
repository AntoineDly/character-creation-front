import { authenticatedAxiosInstance } from '@/config/axios'
import { ComponentsDtoInterface } from './component.interface'

async function getComponents(): Promise<ComponentsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/components')
  return response.data.data
}

async function createComponent(): Promise<void> {
  await authenticatedAxiosInstance.post('/components')
}

export { getComponents, createComponent }
