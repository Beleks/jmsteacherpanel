
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
                title: 'Vuex - централизованное хранилище данных',
                access: 'tarif_1',
              },
              {
                id: '1001',
                type: 'test',
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
      // Сделать добавление модуля через splice когда будем использвать index
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      let newId
      if (variableCourse.content.length === 0) {
        newId = '100'
      } else {
        let lastChildIndex = variableCourse.content.length - 1
        newId = Number(variableCourse.content[lastChildIndex].id) + 1
      }
      let title = params.newModule.title
      let newModule = {
        id: newId,
        title,
        group: '',
        tariffs: '',
        desc: '',
        lessons: []
      }
      // variableCourse.content.push({сразу описание параметров модуля})
      variableCourse.content.push(newModule)
    },
    deleteModule(state, params) {
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      let selectedModuleIndex = variableCourse.content.findIndex(module => module.id == params.moduleId)
      variableCourse.content.splice(selectedModuleIndex, 1)
    },
    addLesson(state, params) {
      // метод должен быть и для вставки в определенное место и для вставки в конец
      // newLesson {id курса ? индекс модуля ? индекс урока ?}
      // Создовать title по умолчанию в зависимости от типа урока ->
      // Потом title можно изменить (цвет серый)
      let variableCourse = state.courses.find(course => course.id == params.courseId)
      let lessons = variableCourse.content[params.moduleIndex].lessons
      // получение нового id
      let newTitle = (lessoType) => {
        return `Название ${lessoType} урока`
      }
      let newLesson = {
        id: '1009',
        type: 'test',
        // ??????
        title: newTitle,
        access: 'tarif_1',
      }
      console.log(params);
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


