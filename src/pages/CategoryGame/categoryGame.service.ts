import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateCategoryFormInterface } from '@/pages/Category/category.interface'

async function createCategoryGame(data: CreateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('category_games', data)
}

export { createCategoryGame }
