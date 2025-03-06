import { RouteRecordRaw } from "vue-router";
import { RouteNamePlayableItemEnum } from "@/router/routes.enum";
import PlayableItemsPage from "./PlayableItemsPage.vue";
import CreatePlayableItemPage from "./CreatePlayableItemPage.vue";

export const playableItemRoutes: RouteRecordRaw[] = [
  {
    path: "/playable_items",
    component: PlayableItemsPage,
    name: RouteNamePlayableItemEnum.PLAYABLE_ITEMS,
    meta: { requiresAuth: true },
  },
  {
    path: "/playable_items/create",
    component: CreatePlayableItemPage,
    name: RouteNamePlayableItemEnum.CREATE_PLAYABLE_ITEM,
    meta: { requiresAuth: true },
  },
];
