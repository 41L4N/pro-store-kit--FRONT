import { createRouter, createWebHistory } from 'vue-router'
import Error404 from './Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../Home.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Error404,
    },
  ],
})

export default router