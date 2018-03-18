import axios from 'axios'
// import _ from 'lodash'

// axios.defaults.baseURL = 'http://192.168.123.251'

export default {
  state: {
    masters: [] // 2 主机
  },
  getters: {
    masters: state => state.masters // 1 主机
  },
  mutations: {
    //  2 主机
    alterMasters: (state, data) => {
      state.masters = data
      // console.log(state.masters)
    }
  },
  actions: {
    // 2 主机
    getMasters: (context) => {
      axios.get('http://192.168.123.251/api/v1/nodes').then((res) => {
        console.log(JSON.parse(res.data))
        context.commit('alterMasters', JSON.parse(res.data))
      })
    },
    //  接入主机
    insertPorts: (context, data) => {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.123.251:81/api/v1/nodes', data).then(function (result) {
          // 保存成功之后
          context.dispatch('getMasters')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
