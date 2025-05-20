import { authenticatedAxiosInstance } from '@/config/axios'
import { CategoriesDtoInterface, CreateCategoryFormInterface } from './category.interface'

async function getCategories(): Promise<CategoriesDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/categories')
  return response.data.data
}

async function createCategory(data: CreateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/categories', data)
}

export { getCategories, createCategory }
