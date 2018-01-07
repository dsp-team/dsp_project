import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/pages/login/login'
import Apply from '@/pages/apply/apply'
import Home from '@/pages/home/home'
import Running from '@/pages/apply/running/running'
import Stoped from '@/pages/apply/stoped/stoped'

import Repo from '@/pages/repo/repo'
import ApplyTemplet from '@/pages/apply_templet/apply_templet'
import Master from '@/pages/master/master'
import Internet from '@/pages/internet/internet'
import UserCenter from '@/pages/user_center/user_center'

// import index from 'vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/apply',
          name: 'apply',
          component: Apply,
          children: [
            {
              path: 'running',
              name: 'running',
              component: Running
            },
            {
              path: 'stoped',
              name: 'stoped',
              component: Stoped
            }
          ]
        },
        {
          path: '/repo',
          name: 'repo',
          component: Repo
        },
        {
          path: '/apply_templet',
          name: 'apply_templet',
          component: ApplyTemplet
        },
        {
          path: '/master',
          name: 'master',
          component: Master
        },
        {
          path: '/internet',
          name: 'internet',
          component: Internet
        },
        {
          path: '/user_center',
          name: 'user_center',
          component: UserCenter
        }
      ]

    }
  ]
})
