import axios from 'axios'
// import _ from 'lodash'

export default {
  state: {
    applys: [] // 1 应用
  },
  getters: {
    applys: state => state.applys // 1 应用
  },
  mutations: {
    // 1 应用
    alterApplys: (state, data) => {
      state.applys = data
    }
  },
  actions: {
    // 2 获取应用
    getApplys: (context) => {
      axios.get('/api/container/list').then((res) => {
        res.data.forEach(element => {
          console.log(element.status)
        })
        context.commit('alterApplys', res.data)
      })
    }
  }
}
