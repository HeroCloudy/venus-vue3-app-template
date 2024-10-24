import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes
  routes: setupLayouts(routes),
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router
