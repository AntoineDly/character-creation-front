import { RouteRecordRaw } from "vue-router";
import { RouteNameCategoryEnum } from "@/router/router.enum";
import CategoriesPage from "@/pages/Category/CategoriesPage.vue";
import CreateCategoryPage from "@/pages/Category/CreateCategoryPage.vue";

export const categoryRoutes: RouteRecordRaw[] = [
  {
    path: "/categories",
    component: CategoriesPage,
    name: RouteNameCategoryEnum.CATEGORIES,
    meta: { requiresAuth: true },
  },
  {
    path: "/categories/create",
    component: CreateCategoryPage,
    name: RouteNameCategoryEnum.CREATE_CATEGORY,
    meta: { requiresAuth: true },
  },
];
