import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { CategoriesDtoInterface, CreateCategoryFormInterface } from '@/pages/Category/category.interface'

async function getCategories(pagination: PaginationQueryParamsInterface): Promise<CategoriesDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/categories', { params: pagination })
  return response.data.data
}

async function createCategory(data: CreateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/categories', data)
}

export { createCategory, getCategories }
