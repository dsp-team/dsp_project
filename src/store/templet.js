import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.123.251'

export default {
  state: {
    // templets: [], // 1 模板
    masters: [] // 2 主机
  },
  getters: {
    // templets: state => state.templets, // 1 模板
    masters: state => state.templets // 1 主机
  },
  mutations: {
    // 1 模板
    // alterTemplets: (state, data) => {
    //   state.templets = data
    // },
    //  2 主机
    alterMasters: (state, data) => {
      state.masters = data
    }
  },
  actions: {
    // 1 模板
    // find: (context) => {
    //   axios.get('/api/v1/nodes').then((res) => {
    //     context.commit('alterTemplets', res.data)
    //     console.log(res.data)
    //   })
    // },

    // 2 主机
    getMasters: (context) => {
      axios.get('/api/v1/nodes').then((res) => {
        context.commit('alterTemplets', res.data)
        console.log(res.data)
      })
    }

    // zhuji: (context) => {
    //   axios.get('http://192.168.66.6/api/dsp/apptemplate/getall/api/v1/nodes/').then((res) => {
    //     context.commit('alterTemplets', res)
    //     console.log(res)
    //   })
    // }
  }
}
