import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/demo',
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/demo.vue'),
    },
  ],
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router
