import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'
import { TypeParameterEnum } from '@/pages/Parameter/parameter.enum'

export interface ParameterDtoInterface {
  id: string
  name: string
  type: TypeParameterEnum
}

export interface ParametersDtoInterface {
  dtos: ParameterDtoInterface[]
  paginationDto: PaginationDtoInterface
}

export interface CreateParameterFormInterface {
  name: string
  type: TypeParameterEnum
}
