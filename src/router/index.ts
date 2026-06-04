import { createRouter, createWebHistory } from 'vue-router'
import Error404 from './Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Ruta principal
    {
      path: '/',
      component: () => import('../Home.vue'),
    },

    // Página 404 (SIEMPRE al final)
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Error404,
    },
  ],
})

export default router