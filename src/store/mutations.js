export default {

  setPathParams(state, params) {
    state.pathParams = Object.assign({}, params)
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