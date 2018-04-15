import axios from 'axios'
// import _ from 'lodash'

export default {
  state: {
    pods: [] // 1 容器
  },
  getters: {
    pods: state => state.pods // 1 容器
  },
  mutations: {
    // 1 容器
    alterPods: (state, data) => {
      state.pods = data
      // console.log(state.pods)
    }
  },
  actions: {
    // 2 容器
    getPods: (context) => {
      axios.get('/api/container/list').then((res) => {
        console.log(res.data)
        res.data.forEach(element => {
          console.log(element.state)
          console.log((element.status).slice(3, 5))
          console.log(element.state)
        })
        context.commit('alterPods', res.data)
      })
    }
  }
}
