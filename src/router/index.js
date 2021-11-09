import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
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
                component: () => import('../views/courses/course name/editor/Editor.vue'),
                children: [
                  {
                    path: 'main',
                    component: () => import('../views/courses/course name/editor/main_info/MainInfo.vue')
                  },
                  {
                    path: 'content',
                    component: () => import('../views/courses/course name/editor/content/Content.vue')
                  },
                  {
                    path: 'tariffs',
                    component: () => import('../views/courses/course name/editor/tariffs/Tariffs.vue')
                  },
                ],
              },
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
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
