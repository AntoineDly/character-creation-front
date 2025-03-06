import { GameDtoInterface } from "@/pages/Game/game.interface";
import { CategoryForCharacterDtoInterface } from "@/pages/Category/category.interface";

export interface CharacterDtoInterface {
  id: string;
}

export interface CharacterWithGameDtoInterface {
  id: string;
  gameDto: GameDtoInterface;
}

export interface CharacterWithLinkedItemsDtoInterface {
  id: string;
  gameDto: GameDtoInterface;
  categoryForCharacterDtos: CategoryForCharacterDtoInterface[];
}

export interface CreateCharacterFormInterface {
  gameId: string;
}
