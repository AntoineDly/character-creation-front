import { authenticatedAxiosInstance } from "@/config/axios";
import { CharacterWithGame } from "./character.interface";

async function getCharacter(characterId: string) {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data;
}

async function getCharactersWithGame(): Promise<CharacterWithGame[]> {
  const response = await authenticatedAxiosInstance.get(
    "/characters/with_game",
  );
  return response.data.data;
}

export { getCharacter, getCharactersWithGame };
