import Vue from 'vue'
import Vuex from 'vuex'
import templet from './templet' // 应用模板
// import clazzStore from './clazzStore'
// import courseStore from './courseStore'
import masterStore from './masterStore/masterStore.js' // 主机
// 必须在创建store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    templet,
    masterStore
  }
})
