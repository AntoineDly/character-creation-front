import { GameDtoInterface } from "@/pages/Game/game.interface";
import { CategoryDtoInterface } from "@/pages/Category/category.interface";

export interface CharacterWithGameDtoInterface {
  id: string;
  gameDto: GameDtoInterface;
}

export interface CharacterWithLinkedItemsDtoInterface {
  id: string;
  gameDto: GameDtoInterface;
  categoryForCharacterDtos: CategoryDtoInterface[];
}

export interface CreateCharacterFormInterface {
  gameId: string;
}
