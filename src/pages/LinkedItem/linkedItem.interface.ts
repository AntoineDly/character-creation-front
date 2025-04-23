import { FieldDtoInterface } from '@/pages/Field/field.interface'

export interface LinkedItemDtoInterface {
  id: string
}

export interface LinkedItemForCharacterDto {
  id: string
  fieldDtoCollection: FieldDtoInterface[]
}

export interface CreateLinkedItemFormInterface {
  characterId: string
  playableItemId: string
}
