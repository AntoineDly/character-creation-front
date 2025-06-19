import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { CreatePlayableItemFormInterface, PlayableItemsDtoInterface } from '@/pages/PlayableItem/playableItem.interface'

async function getPlayableItems(pagination: PaginationQueryParamsInterface): Promise<PlayableItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/playable_items', { params: pagination })
  return response.data.data
}

async function createPlayableItem(data: CreatePlayableItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/playable_items', data)
}

export { createPlayableItem, getPlayableItems }
