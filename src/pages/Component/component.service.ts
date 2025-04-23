import { authenticatedAxiosInstance } from '@/config/axios'
import { ComponentDtoInterface } from './component.interface'

async function getComponents(): Promise<ComponentDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/components')
  return response.data.data.dtos
}

async function createComponent(): Promise<void> {
  await authenticatedAxiosInstance.post('/components')
}

export { getComponents, createComponent }
