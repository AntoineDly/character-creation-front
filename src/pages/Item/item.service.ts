import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateItemFormInterface, ItemsDtoInterface } from './item.interface'

async function getItems(): Promise<ItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/items')
  return response.data.data
}

async function createItem(data: CreateItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/items', data)
}

export { getItems, createItem }
