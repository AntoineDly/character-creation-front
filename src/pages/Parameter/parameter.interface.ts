import { TypeParameterEnum } from '@/pages/Parameter/parameter.enum'
import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

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
