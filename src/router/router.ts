import { createWebHistory, createRouter } from "vue-router";
import { homeRoutes } from "@/pages/Home/routes";
import { gameRoutes } from "@/pages/Game/routes";
import { useAuthStore } from "@/pages/Auth/authStore";
import { dashboardRoutes } from "@/pages/Dashboard/routes";
import { loginRoutes } from "@/pages/Auth/routes";
import { RouteNameAuthEnum } from "@/router/routes.enum";
import { notFoundRoutes } from "@/pages/NotFound/routes";
import { characterRoutes } from "@/pages/Character/routes";
import { categoryRoutes } from "@/pages/Category/routes";
import { componentRoutes } from "@/pages/Component/routes";
import { itemRoutes } from "@/pages/Item/routes";
import { playableItemRoutes } from "@/pages/PlayableItem/routes";
import { linkedItemRoutes } from "@/pages/LinkedItem/routes";

const routes = [
  ...homeRoutes,
  ...dashboardRoutes,
  ...loginRoutes,
  ...notFoundRoutes,
  ...characterRoutes,
  ...gameRoutes,
  ...categoryRoutes,
  ...componentRoutes,
  ...itemRoutes,
  ...playableItemRoutes,
  ...linkedItemRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authStore = useAuthStore();
    if (!authStore.isAuthenticated) {
      return { name: RouteNameAuthEnum.LOGIN };
    }
  }
});

export default router;
