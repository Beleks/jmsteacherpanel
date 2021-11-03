import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: () => import('../views/index.vue'),
    children: [
      { path: 'profile', component: () => import('../views/courses/Courses.vue') },
      { path: 'calendar', component: () => import('../views/courses/Courses.vue') },
      { path: 'courses', component: () => import('../views/courses/Courses.vue') },
      { path: 'settings', component: () => import('../views/courses/Courses.vue') }
    ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
