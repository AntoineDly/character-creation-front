import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'
import { authenticatedAxiosInstance } from '@/config/axios'
import {
  CharacterDtoInterface,
  CharacterWithGameDtoInterface,
  CharacterWithLinkedItemsDtoInterface,
  CreateCharacterFormInterface,
} from '@/pages/Character/character.interface'

async function getCharacters(pagination: PaginationQueryParamsInterface): Promise<CharacterDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/characters', { params: pagination })
  return response.data.data.dtos
}

async function getCharacter(characterId: string): Promise<CharacterWithLinkedItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get('/characters/' + characterId + '/with_linked_items')
  return response.data.data
}

async function getCharactersWithGame(): Promise<CharacterWithGameDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get('/characters/with_game')
  return response.data.data.dtos
}

async function createCharacter(data: CreateCharacterFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post('/characters', data)
}

export { createCharacter, getCharacter, getCharacters, getCharactersWithGame }
