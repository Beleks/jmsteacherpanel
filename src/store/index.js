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
  },
  actions: {
  },
  modules: {
    courses
  }
})
