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
      { path: 'profile', component: () => import('../views/profile/Profile.vue') },
      { path: 'calendar', component: () => import('../views/calendar/Calendar.vue') },
      {
        path: 'courses',
        name: 'courses',
        component: () => import('../views/courses/Courses.vue'),
        children: [
          {
            path: ':id',
            component: () => import('../views/courses/course name/Course.vue'),
            children: [
              {
                path: 'editor',
                component: () => import('../views/courses/course name/editor/main info/MainInfo.vue')
              }
            ]
          }
        ]
      },
      { path: 'settings', component: () => import('../views/settings/Settings.vue') }
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
