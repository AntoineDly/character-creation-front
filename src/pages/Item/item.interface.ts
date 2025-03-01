import { CategoryDtoInterface } from "@/pages/Category/category.interface";
import { ComponentDtoInterface } from "@/pages/Component/component.interface";

export interface ItemDtoInterface {
  id: string;
  component: ComponentDtoInterface;
  category: CategoryDtoInterface;
}
