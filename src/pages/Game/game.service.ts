import { authenticatedAxiosInstance } from "@/config/axios";
import {
  GameDtoInterface,
  GameWithCategoriesAndItemsDtoInterface,
} from "@/pages/Game/game.interface";

async function getGames(): Promise<GameDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get("/games");
  return response.data.data;
}

async function getGame(
  gameId: string,
): Promise<GameWithCategoriesAndItemsDtoInterface> {
  const response = await authenticatedAxiosInstance.get(
    "/games/" + gameId + "/with_categories_and_items",
  );
  return response.data.data;
}

export { getGames, getGame };
