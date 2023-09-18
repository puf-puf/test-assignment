import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SelectedMovieView from '@/views/SelectedMovieView.vue'
import SelectedSerieView from '@/views/SelectedSerieView.vue'
import SelectedPersonView from '@/views/SelectedPersonView.vue'
import CategoryMovieView from '@/views/CategoryMovieView.vue'
import CategorySerieView from '@/views/CategorySerieView.vue'
import CategoryPersonView from '@/views/CategoryPersonView.vue'
import FavouritesView from '@/views/FavouritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    // {
    //   path: '/about',
    //   name: 'about'
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/movie/:id',
      name: 'selectedMovie',
      component: SelectedMovieView
    },
    {
      path: '/movies/:page',
      name: 'movies',
      component: CategoryMovieView
    },
    {
      path: '/movies',
      redirect: '/movies/1',
      name: 'moviesClear',
    },
    {
      path: '/tv/:id',
      name: 'selectedSerie',
      component: SelectedSerieView
    },
    {
      path: '/tvs/:page',
      name: 'tvs',
      component: CategorySerieView
    },
    {
      path: '/tvs',
      redirect: '/tvs/1',
      name: 'tvsClear',
    },
    {
      path: '/person/:id',
      name: 'selectedPerson',
      component: SelectedPersonView
    },
    {
      path: '/persons/:page',
      name: 'persons',
      component: CategoryPersonView
    },
    {
      path: '/persons',
      redirect: '/persons/1',
      name: 'personsClear',
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
