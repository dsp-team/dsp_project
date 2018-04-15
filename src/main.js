// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import store from './store'

// 注册组件
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
// import '@/components'
Vue.config.productionTip = false

Vue.use(Vuex)

// elementUI 全局配置默认为small
Vue.use(ElementUI)
// Vue.use(Element, { size: 'small' })
Vue.use(VueLodash, lodash)

// // Require in a base component context
// const requireComponent = require.context(
//   './components', false, /base-[\w-]+\.vue$/
// )

// requireComponent.keys().forEach(fileName => {
//   // Get component config
//   const componentConfig = requireComponent(fileName)

//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
//   )

//   // Register component globally
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
