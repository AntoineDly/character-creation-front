import { CategoryDtoInterface } from '@/pages/Category/category.interface'
import { PlayableItemDtoInterface } from '@/pages/PlayableItem/playableItem.interface'
import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export interface GameDtoInterface {
  id: string
  name: string
}

export interface GamesDtoInterface {
  dtos: GameDtoInterface[]
  paginationDto: PaginationDtoInterface
}

export interface GameWithCategoriesAndPlayableItemsDtoInterface {
  id: string
  name: string
  categoryDtos: CategoryDtoInterface[]
  playableItemDtos: PlayableItemDtoInterface[]
}

export interface AssociateCategoryFormInterface {
  gameId: string
  categoryId: string
}

export interface CreateGameFormInterface {
  name: string
  visibleForAll: boolean
}
