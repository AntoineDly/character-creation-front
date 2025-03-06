import { authenticatedAxiosInstance } from "@/config/axios";
import {
  CharacterWithGameDtoInterface,
  CharacterWithLinkedItemsDtoInterface,
  CreateCharacterFormInterface,
} from "./character.interface";

async function getCharacter(
  characterId: string,
): Promise<CharacterWithLinkedItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data.data;
}

async function getCharactersWithGame(): Promise<
  CharacterWithGameDtoInterface[]
> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/with_game",
  );
  return response.data.data;
}

async function createCharacter(
  data: CreateCharacterFormInterface,
): Promise<void> {
  await authenticatedAxiosInstance.post("/characters", data);
}

export { getCharacter, getCharactersWithGame, createCharacter };
