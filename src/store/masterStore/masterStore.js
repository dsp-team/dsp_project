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
    insertMaster: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.put('/api/v1/nodes', form).then(function (result) {
          // 保存成功之后
          context.dispatch('getMasters')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    deleteMasters: (context, nodeIp) => {
      console.log(nodeIp)
      return new Promise((resolve, reject) => {
        axios.delete(`/api/v1/nodes?node_ip=${nodeIp}&node_port=2376&force=True`)
        .then(function (result) {
          // 删除成功之后
          context.dispatch('getMasters')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
