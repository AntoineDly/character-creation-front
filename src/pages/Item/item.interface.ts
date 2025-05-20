import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export interface ItemDtoInterface {
  id: string
}

export interface ItemsDtoInterface {
  dtos: ItemDtoInterface[]
  paginationDto: PaginationDtoInterface
}

export interface CreateItemFormInterface {
  componentId: string
  categoryId: string
}
