function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function genID() {
  return ("" + Math.floor(Math.random() * 100000));
}

export default {
  saveChangeFromModal(state, params) {
    let selectedModule = findCourseById(state, params.modal.courseId).content[params.modal.moduleIndex]
    selectedModule.title = params.modal.title
    selectedModule.desc = params.modal.desc
  },
  addModule(state, { newModule, courseId, moduleIndex }) {
    // Попробовать запись (state, {id, title *чтоб видеть ключи объекта* })

    // rootState - нельзя получить в мутации. Перенос action ? либо перенос в этот state
    // console.log(rootState);

    // let variableCourse = findCourseById(state, params.courseId)
    // let newId = genID()
    // let title
    // if (params.newModule.title === "") {
    //   title = "Название модуля"
    // } else {
    //   title = params.newModule.title
    // }
    // let newModule = {
    //   id: newId,
    //   title,
    //   group: '',
    //   tariffs: '',
    //   desc: '',
    //   lessons: []
    // }
    // ============
    // variableCourse (id `id курса`)
    // moduleIndex (для определения места вставки)
    let variableCourse = findCourseById(state, courseId)

    //Можли обойтись без moduleIndex ??
    if (moduleIndex === undefined) {
      variableCourse.content.splice(0, 0, newModule)
    } else {
      variableCourse.content.splice(moduleIndex, 0, newModule)
    }
  },
  deleteModule(state, params) {
    let variableCourse = findCourseById(state, params.courseId)
    let selectedModuleIndex = variableCourse.content.findIndex(module => module.id == params.moduleId)
    variableCourse.content.splice(selectedModuleIndex, 1)
  },
  addLesson(state, params) {
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
    let variableCourse = findCourseById(state, params.courseId)
    let listLessons = variableCourse.content[params.moduleIndex].lessons

    let newId = genID()
    let newTitle = setDefaultTitle(params.lessonType)

    let newLesson = {
      id: newId,
      type: params.lessonType,
      icon: params.svgIcon,
      title: newTitle,
      access: 'tarif_1',
    }
    if (params.lessonIndex === undefined) {
      listLessons.push(newLesson)
    } else {
      listLessons.splice(params.lessonIndex, 0, newLesson)
    }
  },
  deleteLesson(state, params) {
    let variableCourse = findCourseById(state, params.courseId)
    variableCourse.content[params.moduleIndex].lessons.splice(params.lessonIndex, 1)
  },
  setNewLessonTitle(state, params) {

  },

}