import { authenticatedAxiosInstance } from "@/config/axios";
import {
  AssociateCategoryFormInterface,
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
    "/games/" + gameId + "/with_categories_and_playable_items",
  );
  return response.data.data;
}

async function associateCategory(
  data: AssociateCategoryFormInterface,
): Promise<void> {
  await authenticatedAxiosInstance.post("categories/associate_game", data);
}

export { getGames, getGame, associateCategory };
