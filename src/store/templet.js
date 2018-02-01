import axios from 'axios'

export default {
  state: {
    templets: []
  },
  getters: {
    templets: state => state.templets
  },
  mutations: {
    alterTemplets: (state, data) => {
      state.templets = data
    }
  },
  actions: {
    find: (context) => {
      axios.get('/api/dsp/apptemplate/getall').then((res) => {
        context.commit('alterTemplets', res.data)
        console.log(res.data)
      })
    },
    zhuji: (context) => {
      axios.get('/api/v1/nodes/').then((res) => {
        context.commit('alterTemplets', res)
        console.log(res)
      })
    }
  }
}
