import { authenticatedAxiosInstance } from "@/config/axios";

async function getCharacter(characterId: string) {
  const response = await authenticatedAxiosInstance.get(
    "/characters/" + characterId + "/with_linked_items",
  );
  return response.data;
}

export { getCharacter };
