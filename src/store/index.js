import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses/courses.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      isOpen: false
    }
  },
  getters: {
  },
  mutations: {
    openModal(state) {
      state.modal.isOpen = true
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
