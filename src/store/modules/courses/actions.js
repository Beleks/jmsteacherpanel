function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function genID() {
  return ("" + Math.floor(Math.random() * 100000));
}

export default {
  // { newModuleParams, moduleIndex }
  addModule({ state, rootState, commit }, payload) {
    // не получаем полезную нагрузку :(
    console.log(payload.moduleIndex, 'moduleIndex');
    let newId = genID()
    // болия кароткая версия if else ? `??=`
    let title
    if (newModuleParams.title === "") {
      title = "Название модуля"
    } else {
      title = newModuleParams.title
    }
    let newModule = {
      id: newId,
      title,
      tariffs: '',
      desc: '',
      lessons: []
    }
    commit('addModule', { newModule, courseId: rootState.pathParams.id, moduleIndex })
  }
}