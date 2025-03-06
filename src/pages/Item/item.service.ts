import { authenticatedAxiosInstance } from "@/config/axios";
import { CreateItemFormInterface, ItemDtoInterface } from "./item.interface";

async function getItems(): Promise<ItemDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get("/items");
  return response.data.data;
}

async function createItem(data: CreateItemFormInterface): Promise<void> {
  await authenticatedAxiosInstance.post("/items", data);
}

export { getItems, createItem };
