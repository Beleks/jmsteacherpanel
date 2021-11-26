function findCourseById(state, id) {
  return state.courses.filter(course => course.id == id)[0]
}
function genID() {
  return ("" + Math.floor(Math.random() * 100000));
}

export default {
  state: {
    courses: [
      {
        id: '6',
        title: 'Курс по JS',
        content: [
          {
            id: '100',
            title: 'Название модуля',
            group: '',
            tariffs: '',
            desc: 'Описание модуля 1',
            lessons: [
              {
                id: '1000',
                type: 'video',
                icon: 'SvgVideo',
                title: 'Vuex - централизованное хранилище данных',
                access: 'tarif_1',
              },
              {
                id: '1001',
                type: 'test',
                icon: 'SvgTask',
                title: 'Vue-Route во всей красе',
                access: 'tarif_1',
              },
            ]
          }
        ]
      },
      {
        id: '8',
        title: 'Курс по JS',
        content: [
          {
            id: '100',
            title: 'Название модуля',
            group: '',
            tariffs: '',
            desc: 'Описание модуля',
            lessons: [
              {
                id: '1000',
                type: 'video',
                title: 'Название урока',
                access: 'tarif_1',
              },
              {
                id: '1001',
                type: 'test',
                title: 'Vue route во всей красе',
                access: 'tarif_1',
              },
            ]
          }
        ]
      }
    ]
  },
  getters: {
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
  },
  mutations: {
    saveChangeFromModal(state, params) {
      let selectedModule = findCourseById(state, params.modal.courseId).content[params.modal.moduleIndex]
      selectedModule.title = params.modal.title
      selectedModule.desc = params.modal.desc
    },
    addModule(state, params) {
      let variableCourse = findCourseById(state, params.courseId)
      let newId = genID()
      console.log(newId);
      let title
      if (params.newModule.title === "") {
        title = "Название модуля"
      } else {
        title = params.newModule.title
      }
      let newModule = {
        id: newId,
        title,
        group: '',
        tariffs: '',
        desc: '',
        lessons: []
      }
      if (params.moduleIndex === undefined) {
        variableCourse.content.push(newModule)
      } else {
        variableCourse.content.splice(params.moduleIndex, 0, newModule)
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
    }
  }
}



