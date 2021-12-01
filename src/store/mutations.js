export default {
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
}