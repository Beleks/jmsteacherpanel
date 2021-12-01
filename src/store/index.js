import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathPrams: {

    },
    modal: {
      isOpen: false,
      title: '',
      desc: '',
      courseId: '',
      moduleIndex: ''
    },
    menuCurrent: ''

  },
  getters: {
  },
  mutations: {
    addModule(state) {
      console.log(state, 'main state');
      // Мы можем получить параметры маршрута из модуля в главном state 
    },
    // 
    setPathParams(state, params) {
      state.pathPrams = Object.assign({}, params)
    },
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
    },
    changeMenuCurrent(state, menu) {
      state.menuCurrent = menu
    },
    

  },
  actions: {
    setPathParams({state, commit}){
      console.log('from main state');
      commit('setPathParams')
    }
  },
  modules: {
    courses
  }
})
