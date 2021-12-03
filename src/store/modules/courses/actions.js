function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function genID() {
  return ("" + Math.floor(Math.random() * 100000));
}

export default {
  addModule({ rootState, commit }, { newModuleParams, moduleIndex }) {
    let newId = genID()
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
  },
  deleteModule({ rootState, commit }, { moduleId }) {
    commit("deleteModule", { courseId: rootState.pathParams.id, moduleId })
  },
  addLesson({ rootState, commit }, { moduleId, lessonIndex, lessonType, svgIcon, }) {
    function setDefaultTitle(lessonType) {
      let title = ''
      switch (lessonType) {
        case 'video':
          title = 'Название видеоурока'
          break;
        case 'test':
          title = 'Название теста'
          break;
        case 'practice':
          title = 'Название задания'
          break;
        case 'vebinar':
          title = 'Название вебинара'
          break;
        // default:
        //   break;
      }
      return title
    }
    let newId = genID()
    let newTitle = setDefaultTitle(lessonType)
    let newLesson = {
      id: newId,
      type: lessonType,
      icon: svgIcon,
      title: newTitle,
      access: 'tarif_1',
    }
    commit('addLesson', { courseId: rootState.pathParams.id, moduleId, lessonIndex, newLesson })
  },
  deleteLesson({ rootState, commit }, { moduleId, lessonIndex }) {
    commit('deleteLesson', { courseId: rootState.pathParams.id, moduleId, lessonIndex })
  },
}
