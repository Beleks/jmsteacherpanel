import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses/courses.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      isOpen: false,
      title: '',
      desc: '',
      courseId: '',
      moduleIndex: ''
    }
  },
  getters: {
  },
  mutations: {
    openModal(state, params) {
      state.modal = {
        isOpen: true,
        title: params.moduleTitle,
        desc: params.moduleDesc,
        courseId: params.courseId,
        moduleIndex: params.moduleIndex
      }
    },
    closeModal(state) {
      state.modal.isOpen = false
    }

  },
  actions: {

  },
  modules: {
    courses
  }
})
