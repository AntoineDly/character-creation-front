import { CategoryDtoInterface } from "@/pages/Category/category.interface";
import { ItemDtoInterface } from "@/pages/Item/item.interface";

export interface GameDtoInterface {
  id: string;
  name: string;
}

export interface GameWithCategoriesAndItemsDtoInterface {
  id: string;
  name: string;
  categoryDtos: CategoryDtoInterface[];
  itemDtos: ItemDtoInterface[];
}

export interface AssociateCategoryFormInterface {
  gameId: string;
  categoryId: string;
}

export interface CreateGameFormInterface {
  name: string;
  visibleForAll: boolean;
}
