
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
            desc: 'Описание модуля',
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
      return state.courses.filter(course => course.id == id)[0]
    }
  },
  mutations: {
    addModule(state, params) {
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      let newId
      if (variableCourse.content.length === 0) {
        newId = '100'
      } else {
        let lastChildIndex = variableCourse.content.length - 1
        newId = Number(variableCourse.content[lastChildIndex].id) + 1
      }
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
      // variableCourse.content.push({сразу описание параметров модуля})
      if (params.moduleIndex === undefined) {
        variableCourse.content.push(newModule)
      } else {
        variableCourse.content.splice(params.moduleIndex, 0, newModule)
      }
    },
    deleteModule(state, params) {
      let variableCourse = state.courses.find(course => course.id == params.courseId)
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

      // метод должен быть и для вставки в определенное место и для вставки в конец
      // newLesson {id курса ? индекс модуля ? индекс урока ?}
      // Создовать title по умолчанию в зависимости от типа урока ->
      // Потом title можно изменить (цвет серый)
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      let lessons = variableCourse.content[params.moduleIndex].lessons
      // получение нового id

      let newTitle = setDefaultTitle(params.lessonType)

      let newLesson = {
        id: '1009',
        type: params.lessonType,
        icon: params.svgIcon,
        title: newTitle,
        access: 'tarif_1',
      }
      if (params.lessonIndex === undefined) {
        lessons.push(newLesson)
      } else {
        lessons.splice(params.lessonIndex, 0, newLesson)
      }
    },
    deleteLesson(state, params) {
      // можем ли разделить данные ? (таблица куросв отедельно от контента)
      // id курса ? индекс модуля ? индекс урока ?
      // 
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      variableCourse.content[params.moduleIndex].lessons.splice(params.lessonIndex, 1)
    }
  }
}



