import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SelectedMovieView from '../views/SelectedMovieView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/about',
      name: 'about'
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/movie/:id',
      name: 'selectedMovie',
      component: SelectedMovieView
    }
  ]
})

export default router
