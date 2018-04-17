import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/pages/login/login.vue'
import Apply from '@/pages/apply/apply.vue'
import Home from '@/pages/home/home.vue'
import Running from '@/pages/apply/running/running.vue'
import Stoped from '@/pages/apply/stoped/stoped.vue'
import CreateAppImage from '@/pages/apply/create-app-image/create-app-image.vue'
// import CreateAppImageStep1 from '@/pages/apply/create-app-image/step/step1.vue'
// import CreateAppImageStep2 from '@/pages/apply/create-app-image/step/step2.vue'
// import CreateAppImageStep3 from '@/pages/apply/create-app-image/step/step3.vue'
import CreateAppTemplate from '@/pages/apply/create-app-template/create-app-template.vue'

import Repo from '@/pages/repo/repo.vue'
import ApplyTemplet from '@/pages/apply_templet/apply_templet.vue'
import TempletDetail from '@/pages/apply_templet/detail/templet_detail.vue'
import Pod from '@/pages/pod/pod.vue'
import Master from '@/pages/master/master.vue'
import Internet from '@/pages/internet/internet.vue'
import UserCenter from '@/pages/user_center/user_center.vue'

// 创建应用

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
            },
            {
              path: 'createAppImage',
              name: 'createAppImage',
              component: CreateAppImage
              // children: [
              //   {
              //     path: '',
              //     name: 'createAppImageStep1',
              //     component: CreateAppImageStep1
              //   }
              // ]
            },
            {
              path: 'createAppTemplate',
              name: 'cretaeAppTemplate',
              component: CreateAppTemplate
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
          path: '/apply_templet/:name',
          name: 'apply_templet.detail',
          component: TempletDetail
        },
        {
          path: '/pod',
          name: 'pod',
          component: Pod
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
