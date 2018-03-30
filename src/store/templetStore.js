import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.123.251'

export default {
  state: {
    templates: [] // 2 模板
  },
  getters: {
    templates: state => state.templates // 2 模板
  },
  mutations: {
    //  2 模板
    alterTemplates: (state, data) => {
      state.templates = data
    }
  },
  actions: {

    // 2 获取应用模板
    getTemplates: (context) => {
      axios.get('/dsp/apptemplate/getall').then((res) => {
        context.commit('alterTemplates', res.data)
      })
    },
    // 3 删除模板
    deleteTemplate: (context, data) => {
      var obj = {name: data}
      return new Promise((resolve, reject) => {
        axios.post('/dsp/apptemplate/delete', obj)
          .then(function (result) {
            context.dispatch('getTemplates')
            resolve(result)
          }).catch((error) => {
            reject(error)
            console.log(error)
          })
      })
    },
    // 4 添加模板
    addTemplate: (context, form) => {
      // form = JSON.stringify(form)
      return new Promise((resolve, reject) => {
        axios.post('/dsp/apptemplate/add', form).then((result) => {
          context.dispatch('getTemplates')
          resolve(result)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
      })
    },
    // 5 获取模板详情信息
    getDetailByName: (context, data) => {
      return new Promise((resolve, reject) => {
        axios.post('/dsp/apptemplate/get', data).then((res) => {
          resolve(res)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
      })
    }
  }
}
