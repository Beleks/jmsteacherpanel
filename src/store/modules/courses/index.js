import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'



const state = {
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
}

export default {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
}






