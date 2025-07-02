import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import {
  AssociateCategoryFormInterface,
  CreateGameFormInterface,
  GameDtoInterface,
  GamesDtoInterface,
  GameWithCategoriesAndPlayableItemsDtoInterface,
} from '@/pages/Game/game.interface'

async function getGames(pagination: PaginationQueryParamsInterface): Promise<GamesDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/games', { params: pagination })
  return response.data.data
}

async function getAllGames(): Promise<GameDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/games_all')
  return response.data.data
}

async function getGame(gameId: string): Promise<GameDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/games/' + gameId)
  return response.data.data
}

async function getGameWithCategoriesAndPlayableItems(
  gameId: string,
): Promise<GameWithCategoriesAndPlayableItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/games/' + gameId + '/with_categories_and_playable_items')
  return response.data.data
}

async function associateCategory(data: AssociateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('categories/associate_game', data)
}

async function createGame(data: CreateGameFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/games', data)
}

export { associateCategory, createGame, getAllGames, getGame, getGames, getGameWithCategoriesAndPlayableItems }
