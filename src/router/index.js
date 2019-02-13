import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components ={
  login:()=>import('@/views/login'),
  allPages:()=>import('@/views/allPages'),
  unknow:()=>import('@/views/404'),
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta:{
        title:'登陆'
      },
      component:components.login
    },
    {
      path: '/allPages',
      name: 'allPages',
      component:components.allPages,
      // redirect: '/allPages/users',
      // children: [
      //   {
      //     path: 'control',
      //     name: 'control',
      //     component:components.control
      //   },
      // ]
    },
    {
      path: '*',
      name: '404',
      component:components.unknow
    },
  ]
})
