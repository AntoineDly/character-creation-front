import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export interface ComponentDtoInterface {
  id: string
}

export interface ComponentsDtoInterface {
  dtos: ComponentDtoInterface[]
  paginationDto: PaginationDtoInterface
}
