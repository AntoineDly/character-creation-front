import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateCategoryGameFormInterface } from '@/pages/CategoryGame/categoryGame.interface'

async function createCategoryGame(data: CreateCategoryGameFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('category_games', data)
}

export { createCategoryGame }
