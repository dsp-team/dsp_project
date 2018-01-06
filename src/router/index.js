import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'
import Apply from '@/pages/apply/apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    }
  ]
})
