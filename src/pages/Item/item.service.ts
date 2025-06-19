import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateItemFormInterface, ItemsDtoInterface } from '@/pages/Item/item.interface'

async function getItems(pagination: PaginationQueryParamsInterface): Promise<ItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/items', { params: pagination })
  return response.data.data
}

async function createItem(data: CreateItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/items', data)
}

export { createItem, getItems }
