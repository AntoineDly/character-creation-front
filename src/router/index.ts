import { useAuthStore } from '@/pages/Auth/authStore'
import { loginRoutes } from '@/pages/Auth/routes'
import { categoryRoutes } from '@/pages/Category/routes'
import { categoryGameRoutes } from '@/pages/CategoryGame/routes'
import { characterRoutes } from '@/pages/Character/routes'
import { componentRoutes } from '@/pages/Component/routes'
import { componentFieldRoutes } from '@/pages/ComponentField/routes'
import { dashboardRoutes } from '@/pages/Dashboard/routes'
import { gameRoutes } from '@/pages/Game/routes'
import { homeRoutes } from '@/pages/Home/routes'
import { itemRoutes } from '@/pages/Item/routes'
import { linkedItemRoutes } from '@/pages/LinkedItem/routes'
import { notFoundRoutes } from '@/pages/NotFound/routes'
import { parameterRoutes } from '@/pages/Parameter/routes'
import { playableItemRoutes } from '@/pages/PlayableItem/routes'
import { RouteNameAuthEnum } from '@/router/router.enum'
import { createRouter, createWebHistory } from 'vue-router'

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
  ...parameterRoutes,
  ...componentFieldRoutes,
  ...categoryGameRoutes,
]

const index = createRouter({
  history: createWebHistory(),
  routes,
})

index.beforeEach(async to => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated) {
      return { name: RouteNameAuthEnum.LOGIN }
    }
  }
})

export default index
