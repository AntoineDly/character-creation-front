import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateParameterFormInterface, ParametersDtoInterface } from './parameter.interface'

async function getParameters(): Promise<ParametersDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/parameters')
  return response.data.data
}

async function createParameter(data: CreateParameterFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/parameters', data)
}

export { getParameters, createParameter }
