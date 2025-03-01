import { authenticatedAxiosInstance } from "@/config/axios";
import {
  CharacterWithGameInterface,
  CharacterWithLinkedItemsInterface,
} from "./character.interface";

async function getCharacter(
  characterId: string,
): Promise<CharacterWithLinkedItemsInterface> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data.data;
}

async function getCharactersWithGame(): Promise<CharacterWithGameInterface[]> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/with_game",
  );
  return response.data.data;
}

export { getCharacter, getCharactersWithGame };
