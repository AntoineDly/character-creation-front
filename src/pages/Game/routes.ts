import { RouteRecordRaw } from "vue-router";
import { RouteNameGameEnum } from "@/router/routes.enum";
import GamesPage from "@/pages/Game/GamesPage.vue";
import GamePage from "@/pages/Game/GamePage.vue";
import AssociateCategoryPage from "@/pages/Game/AssociateCategoryPage.vue";

export const gameRoutes: RouteRecordRaw[] = [
  {
    path: "/games",
    component: GamesPage,
    name: RouteNameGameEnum.GAMES,
    meta: { requiresAuth: true },
  },
  {
    path: "/games/:gameId",
    component: GamePage,
    name: RouteNameGameEnum.GAME,
    meta: { requiresAuth: true },
  },
  {
    path: "/games/:gameId/associate_category",
    component: AssociateCategoryPage,
    name: RouteNameGameEnum.ASSOCIATE_CATEGORY,
    meta: { requiresAuth: true },
  },
];
