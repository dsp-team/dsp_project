import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.123.251'

export default {
  state: {
    masters: [] // 2 主机
  },
  getters: {
    masters: state => state.masters // 2 主机
  },
  mutations: {
    //  2 主机
    alterMasters: (state, data) => {
      state.masters = data
    }
  },
  actions: {

    // 2 主机
    getMasters: (context) => {
      axios.get('/api/v1/nodes').then((res) => {
        // context.commit('alterMasters', res.data)
        // console.log(res.data)
      })
    }

  }
}
