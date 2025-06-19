import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateLinkedItemFormInterface, LinkedItemsDtoInterface } from '@/pages/LinkedItem/linkedItem.interface'

async function getLinkedItems(pagination: PaginationQueryParamsInterface): Promise<LinkedItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/linked_items', { params: pagination })
  return response.data.data
}

async function createLinkedItem(data: CreateLinkedItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/linked_items', data)
}

export { createLinkedItem, getLinkedItems }
