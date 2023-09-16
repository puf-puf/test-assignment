import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SelectedMovieView from '../views/SelectedMovieView.vue'
import SelectedSerieView from '../views/SelectedSerieView.vue'
import SelectedPersonView from '../views/SelectedPersonView.vue'
import CategoryMovieView from '@/views/CategoryMovieView.vue'
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
    },
    {
      path: '/movies/:id?',
      name: 'movies',
      component: CategoryMovieView
    },
    {
      path: '/tv/:id',
      name: 'selectedSerie',
      component: SelectedSerieView
    },
    {
      path: '/person/:id',
      name: 'selectedPerson',
      component: SelectedPersonView
    }
  ]
})

export default router
