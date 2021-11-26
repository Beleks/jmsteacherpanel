import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Profile',
    component: () => import('../views/index.vue'),
    redirect: '/profile',
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
                    name: 'mainEditor',
                    component: () => import('../views/courses/course name/editor/main_info/MainInfo.vue')
                  },
                  {
                    path: 'content',
                    name: 'mainContent',
                    component: () => import('../views/courses/course name/editor/content/Content.vue'),
                    children: [
                      {
                        path: ':lessonId',
                        name: 'lesson',
                        component: () => import('../views/courses/course name/editor/content/lesson/Lesson.vue'),

                      },
                    ]
                  },
                  {
                    path: 'tariffs',
                    name: 'mainTariffs',
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
