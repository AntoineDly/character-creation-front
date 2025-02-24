import { authenticatedAxiosInstance } from "@/config/axios";
import {
  CharacterWithGame,
  CharacterWithLinkedItems,
} from "./character.interface";

async function getCharacter(
  characterId: string,
): Promise<CharacterWithLinkedItems> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data.data;
}

async function getCharactersWithGame(): Promise<CharacterWithGame[]> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/with_game",
  );
  return response.data.data;
}

export { getCharacter, getCharactersWithGame };
