import { RouteRecordRaw } from "vue-router";
import { RouteNameItemEnum } from "@/router/routes.enum";
import ItemsPage from "./ItemsPage.vue";
import CreateItemPage from "./CreateItemPage.vue";

export const itemRoutes: RouteRecordRaw[] = [
  {
    path: "/items",
    component: ItemsPage,
    name: RouteNameItemEnum.ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: "/items/create",
    component: CreateItemPage,
    name: RouteNameItemEnum.CREATE_ITEM,
    meta: { requiresAuth: true },
  },
];
