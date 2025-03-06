import { RouteRecordRaw } from "vue-router";
import { RouteNameLinkedItemEnum } from "@/router/routes.enum";
import LinkedItemsPage from "./LinkedItemsPage.vue";
import CreateLinkedItemPage from "./CreateLinkedItemPage.vue";

export const linkedItemRoutes: RouteRecordRaw[] = [
  {
    path: "/linked_items",
    component: LinkedItemsPage,
    name: RouteNameLinkedItemEnum.LINKED_ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: "/linked_items/create",
    component: CreateLinkedItemPage,
    name: RouteNameLinkedItemEnum.CREATE_LINKED_ITEM,
    meta: { requiresAuth: true },
  },
];
