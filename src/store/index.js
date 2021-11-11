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
                title: 'Название урока',
                access: 'tarif_1',
              },
              {
                id: '1000',
                type: 'test',
                title: 'Название урока',
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
                id: '1000',
                type: 'test',
                title: 'Название урока',
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
      return state.courses.filter(course => course.id == id)
    }
  },
  mutations: {
    // Добавление/удаление модуля
    // Добавление/Удаление урока

    // mapGet пердаем (id) в mapget ?
  },
  actions: {
  },
  modules: {
  }
})
