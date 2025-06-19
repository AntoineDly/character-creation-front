import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateParameterFormInterface, ParametersDtoInterface } from '@/pages/Parameter/parameter.interface'

async function getParameters(pagination: PaginationQueryParamsInterface): Promise<ParametersDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/parameters', { params: pagination })
  return response.data.data
}

async function createParameter(data: CreateParameterFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/parameters', data)
}

export { createParameter, getParameters }
