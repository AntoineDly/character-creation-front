import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import {
  CategoriesDtoInterface,
  CategoryDtoInterface,
  CreateCategoryFormInterface,
} from '@/pages/Category/category.interface'

async function getCategories(pagination: PaginationQueryParamsInterface): Promise<CategoriesDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/categories', { params: pagination })
  return response.data.data
}

async function getCategory(categoryId: string): Promise<CategoryDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/categories/' + categoryId)
  return response.data.data
}

async function createCategory(data: CreateCategoryFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/categories', data)
}

async function getAllCategories(): Promise<CategoryDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/categories_all')
  return response.data.data
}

export { createCategory, getAllCategories, getCategories, getCategory }
