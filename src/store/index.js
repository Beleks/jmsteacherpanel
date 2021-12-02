import Vue from 'vue'
import Vuex from 'vuex'

import courses from './modules/courses/index.js'
import actions from './actions.js'
import mutations from './mutations.js'
// import getters from './getters.js'

Vue.use(Vuex)

const state = {
  pathPrams: {},
  modal: {
    isOpen: false,
    title: '',
    desc: '',
    courseId: '',
    moduleIndex: ''
  },
  menuCurrent: ''
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    courses
  }
})
