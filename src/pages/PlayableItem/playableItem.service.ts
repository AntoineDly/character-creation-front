import { authenticatedAxiosInstance } from '@/config/axios'
import { CreatePlayableItemFormInterface, PlayableItemDtoInterface } from './playableItem.interface'

async function getPlayableItems(): Promise<PlayableItemDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/playable_items')
  return response.data.data.dtos
}

async function createPlayableItem(data: CreatePlayableItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/playable_items', data)
}

export { getPlayableItems, createPlayableItem }
