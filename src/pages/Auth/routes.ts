import { RouteRecordRaw } from "vue-router";
import LoginPage from "./LoginPage.vue";
import { RouteNameAuthEnum } from "@/router/routes.enum";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";

export const loginRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LoginPage,
    name: RouteNameAuthEnum.LOGIN,
  },
  {
    path: "/register",
    component: RegisterPage,
    name: RouteNameAuthEnum.REGISTER,
  },
];
