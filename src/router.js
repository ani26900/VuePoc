import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '@/components/welcome/welcome.vue'
import SignUpPage from '@/components/auth/signup.vue'
import SignInPage from '@/components/auth/signin.vue'
import DashBoard from '@/components/dashboard/dashboard.vue'
import DetailPage from '@/components/details/detail.vue'

import store from './store'


Vue.use(VueRouter)


 const routes= [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/signin',
      name: 'SignInPage',
      component: SignInPage
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: DetailPage,
      children: []
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
      beforeEnter(to, from ,next ){
        if(store.state.idToken){
          next()} 
          else{
            next('/signin')
          }
      }
    }
  ]
    export default new VueRouter({mode:'history',routes})  

