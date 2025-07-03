import { authenticatedAxiosInstance } from '@/config/axios'
import { CreateComponentFieldFormInterface } from '@/pages/ComponentField/componentField.interface'

async function createComponentField(data: CreateComponentFieldFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/component_fields', data)
}

export { createComponentField }
