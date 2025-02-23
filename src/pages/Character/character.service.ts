import { authenticatedAxiosInstance } from "@/config/axios";

async function getCharacter(characterId: string) {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data;
}

async function getCharactersWithGame() {
  const response = await authenticatedAxiosInstance.get(
    "/characters/with_game",
  );
  return response.data;
}

export { getCharacter, getCharactersWithGame };
