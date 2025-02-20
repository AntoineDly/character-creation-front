import { RouteRecordRaw } from "vue-router";
import LoginPage from "./LoginPage.vue";
import { RouteNameAuthEnum } from "@/router/routes.enum";

export const loginRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LoginPage,
    name: RouteNameAuthEnum.LOGIN,
  },
];
