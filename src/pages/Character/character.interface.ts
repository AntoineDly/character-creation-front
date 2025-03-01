import { GameDtoInterface } from "@/pages/Game/game.interface";
import { CategoryDtoInterface } from "@/pages/Category/category.interface";

export interface CharacterWithGameInterface {
  id: string;
  gameDto: GameDtoInterface;
}

export interface CharacterWithLinkedItemsInterface {
  id: string;
  gameDto: GameDtoInterface;
  categoryForCharacterDtos: CategoryDtoInterface[];
}
