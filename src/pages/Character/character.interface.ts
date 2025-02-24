import { GameDtoInterface } from "@/pages/Game/game.interface";
import { CategoryForCharacterDto } from "@/pages/Category/category.interface";

export interface CharacterWithGame {
  id: string;
  gameDto: GameDtoInterface;
}

export interface CharacterWithLinkedItems {
  id: string;
  gameDto: GameDtoInterface;
  categoryForCharacterDtos: CategoryForCharacterDto[];
}
