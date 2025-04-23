import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateLinkedItemFormInterface, LinkedItemDtoInterface } from './linkedItem.interface'

async function getLinkedItems(): Promise<LinkedItemDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/linked_items')
  return response.data.data.dtos
}

async function createLinkedItem(data: CreateLinkedItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/linked_items', data)
}

export { getLinkedItems, createLinkedItem }
