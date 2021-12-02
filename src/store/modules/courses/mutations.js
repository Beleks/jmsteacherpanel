function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function findModuleById(course, id) {
  return course.content.filter(module => module.id == id)[0]
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
  // ===
  addModule(state, { newModule, courseId, moduleIndex }) {
    let variableCourse = findCourseById(state, courseId)

    if (moduleIndex === undefined) {
      variableCourse.content.push(newModule)
    } else {
      variableCourse.content.splice(moduleIndex, 0, newModule)
    }
  },
  deleteModule(state, { courseId, moduleId }) {
    let variableCourse = findCourseById(state, courseId)
    let selectedModuleIndex = variableCourse.content.findIndex(module => module.id == moduleId)
    variableCourse.content.splice(selectedModuleIndex, 1)
  },
  addLesson(state, { courseId, moduleId, lessonIndex, newLesson }) {
    let variableCourse = findCourseById(state, courseId)
    let listLessons = findModuleById(variableCourse, moduleId).lessons

    if (lessonIndex === undefined) {
      listLessons.push(newLesson)
    } else {
      listLessons.splice(lessonIndex, 0, newLesson)
    }
  },
  deleteLesson(state, { courseId, moduleId, lessonIndex }) {
    let variableCourse = findCourseById(state, courseId)
    findModuleById(variableCourse, moduleId).lessons.splice(lessonIndex, 1)
  },
  // ===
  setNewLessonTitle(state, { }) {

  },
}