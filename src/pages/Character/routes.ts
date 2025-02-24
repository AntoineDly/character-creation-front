import { RouteRecordRaw } from "vue-router";
import { RouteNameCharacterEnum } from "@/router/routes.enum";
import CharactersPage from "./CharactersPage.vue";
import CharacterPage from "./CharacterPage.vue";

export const characterRoutes: RouteRecordRaw[] = [
  {
    path: "/characters",
    component: CharactersPage,
    name: RouteNameCharacterEnum.CHARACTERS,
    meta: { requiresAuth: true },
  },
  {
    path: "/characters/:characterId",
    component: CharacterPage,
    name: RouteNameCharacterEnum.CHARACTER,
    meta: { requiresAuth: true },
  },
];
