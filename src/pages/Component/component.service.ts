import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { ComponentsDtoInterface } from '@/pages/Component/component.interface'

async function getComponents(pagination: PaginationQueryParamsInterface): Promise<ComponentsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/components', { params: pagination })
  return response.data.data
}

async function createComponent(): Promise<void> {
  await authenticatedAxiosInstance.post('/components')
}

export { createComponent, getComponents }
