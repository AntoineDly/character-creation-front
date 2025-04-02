import { authenticatedAxiosInstance } from '@/config/axios'
import {
  AssociateCategoryFormInterface,
  CreateGameFormInterface,
  GameDtoInterface,
  GameWithCategoriesAndPlayableItemsDtoInterface,
} from './game.interface'

async function getGames(): Promise<GameDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/games')
  return response.data.data
}

async function getGame(gameId: string): Promise<GameWithCategoriesAndPlayableItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/games/' + gameId + '/with_categories_and_playable_items')
  return response.data.data
}

async function associateCategory(data: AssociateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('categories/associate_game', data)
}

async function createGame(data: CreateGameFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/games', data)
}

export { getGames, getGame, associateCategory, createGame }
