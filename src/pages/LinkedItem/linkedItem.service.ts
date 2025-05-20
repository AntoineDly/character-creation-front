import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateLinkedItemFormInterface, LinkedItemsDtoInterface } from './linkedItem.interface'

async function getLinkedItems(): Promise<LinkedItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/linked_items')
  return response.data.data
}

async function createLinkedItem(data: CreateLinkedItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/linked_items', data)
}

export { getLinkedItems, createLinkedItem }
