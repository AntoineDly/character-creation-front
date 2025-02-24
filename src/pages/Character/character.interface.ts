import { GameDtoInterface } from "@/pages/Game/game.interface";

export interface CharacterWithGame {
  id: string;
  gameDto: GameDtoInterface;
}
