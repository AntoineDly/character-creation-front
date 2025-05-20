import { authenticatedAxiosInstance } from '@/config/axios'
import { CreatePlayableItemFormInterface, PlayableItemsDtoInterface } from './playableItem.interface'

async function getPlayableItems(): Promise<PlayableItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/playable_items')
  return response.data.data
}

async function createPlayableItem(data: CreatePlayableItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/playable_items', data)
}

export { getPlayableItems, createPlayableItem }
