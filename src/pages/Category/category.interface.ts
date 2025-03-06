import { LinkedItemForCharacterDto } from "@/pages/LinkedItem/linkedItem.interface";

export interface CategoryDtoInterface {
  id: string;
  name: string;
}

export interface CategoryForCharacterDtoInterface {
  id: string;
  name: string;
  linkedItemForCharacterDtos: LinkedItemForCharacterDto[];
}

export interface CreateCategoryFormInterface {
  name: string;
}
