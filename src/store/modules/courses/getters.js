function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function genID() {
  return ("" + Math.floor(Math.random() * 100000));
}
// Вынести пользовательские функции в отдельный файл ?


export default {
  currentCourse: state => id => {
    // Находим нужный курс
    return findCourseById(state, id)
  },
  currentLesson: state => (courseId, moduleId, lessonId) => {
    // Находим нужный курс -> находим модуль -> находим урок 
    return state.courses.filter(course => course.id == courseId)[0]
      .content.filter(module => module.id == moduleId)[0]
      .lessons.filter(lesson => lesson.id == lessonId)[0]
  }
}