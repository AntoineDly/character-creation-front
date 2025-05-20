import { FieldDtoInterface } from '@/pages/Field/field.interface'
import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export interface LinkedItemDtoInterface {
  id: string
}

export interface LinkedItemsDtoInterface {
  dtos: LinkedItemDtoInterface[]
  paginationDto: PaginationDtoInterface
}

export interface LinkedItemForCharacterDto {
  id: string
  fieldDtoCollection: FieldDtoInterface[]
}

export interface CreateLinkedItemFormInterface {
  characterId: string
  playableItemId: string
}
