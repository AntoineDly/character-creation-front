import { authenticatedAxiosInstance } from '@/config/axios'
import { CategoryDtoInterface, CreateCategoryFormInterface } from './category.interface'

async function getCategories(): Promise<CategoryDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/categories')
  return response.data.data.dtos
}

async function createCategory(data: CreateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/categories', data)
}

export { getCategories, createCategory }
