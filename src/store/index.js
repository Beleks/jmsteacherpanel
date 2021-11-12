import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses: [
      {
        id: '6',
        title: 'Курс по JS',
        content: [
          {
            id: '100',
            title: 'Название модуля',
            group: '',
            tariffs: '',
            desc: 'Описание модуля',
            lessons: [
              {
                id: '1000',
                type: 'video',
                title: 'Vuex - централизованное хранилище данных',
                access: 'tarif_1',
              },
              {
                id: '1001',
                type: 'test',
                title: 'Vue-Route во всей красе',
                access: 'tarif_1',
              },
            ]
          }
        ]
      },
      {
        id: '8',
        title: 'Курс по JS',
        content: [
          {
            id: '100',
            title: 'Название модуля',
            group: '',
            tariffs: '',
            desc: 'Описание модуля',
            lessons: [
              {
                id: '1000',
                type: 'video',
                title: 'Название урока',
                access: 'tarif_1',
              },
              {
                id: '1001',
                type: 'test',
                title: 'Vue route во всей красе',
                access: 'tarif_1',
              },
            ]
          }
        ]
      }
    ]
  },
  getters: {
    currentCourse: state => id => {
      return state.courses.filter(course => course.id == id)[0]
    }
  },
  mutations: {
    addModule(state, params) {
      let variableCourse = state.courses.find(course => course.id == params.id)
      variableCourse.content.push(params.newModule)
    },
    deleteModule(state, params) {
      let variableCourse = state.courses.find(course => course.id == params.idCourse)
      let selectedModuleIndex = variableCourse.content.findIndex(module => module.id == params.idModule)
      variableCourse.content.splice(selectedModuleIndex, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
