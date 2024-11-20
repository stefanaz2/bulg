import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChurchesView from '@/views/ChurchesView.vue'
import ChurchView from '@/views/ChurchView.vue'
import DancesView from '@/views/DancesView.vue'
import DanceView from '@/views/DanceView.vue'
import EventsView from '@/views/EventsView.vue'
import EventView from '@/views/EventView.vue'
import TheatresView from '@/views/TheatresView.vue'
import TheatreView from '@/views/TheatreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/churches',
      name: 'churches',
      component: ChurchesView
    },
    {
      path: '/churches/:id',
      component: ChurchView
    },
    {
      path: '/dances',
      name: 'dances',
      component: DancesView
    },
    {
      path: '/dances/:id',
      component: DanceView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/events/:id',
      component: EventView
    },
    {
      path: '/theatres',
      name: 'theatres',
      component: TheatresView
    },
    {
      path: '/dances/:id',
      component: TheatreView
    }
  ]
})

export default router
