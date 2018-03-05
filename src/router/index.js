import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/pages/login/login.vue'
import Apply from '@/pages/apply/apply.vue'
import Home from '@/pages/home/home.vue'
import Running from '@/pages/apply/running/running.vue'
import Stoped from '@/pages/apply/stoped/stoped.vue'

import Repo from '@/pages/repo/repo.vue'
import ApplyTemplet from '@/pages/apply_templet/apply_templet.vue'
import TempletDetail from '@/pages/apply_templet/detail/templet_detail.vue'
import Master from '@/pages/master/master.vue'
import Internet from '@/pages/internet/internet.vue'
import UserCenter from '@/pages/user_center/user_center.vue'

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
          path: '/apply_templet/:id',
          name: 'apply_templet.detail',
          component: TempletDetail
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
