import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export interface PlayableItemDtoInterface {
  id: string
}

export interface PlayableItemsDtoInterface {
  dtos: PlayableItemDtoInterface[]
  paginationDto: PaginationDtoInterface
}

export interface CreatePlayableItemFormInterface {
  itemId: string
  gameId: string
}
