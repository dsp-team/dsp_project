import Vue from 'vue'
import Vuex from 'vuex'
import templetStore from './templetStore' // 应用模板
import masterStore from './masterStore/masterStore.js' // 主机
import podStore from './podStore/podStore.js' // 容器
// 必须在创建store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    templetStore,
    masterStore,
    podStore
  }
})
