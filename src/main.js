import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
  

Vue.use(Vuelidate)
axios.defaults.baseURL = 'https://vue-signup-25c9b.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fasfas'
 axios.defaults.headers.get[ 'Accepts'] = 'application/json'

 const reqInterceptor = axios.interceptors.request.use(config =>{
   console.log(config)
   return config
 }) 

 const resInterceptor=axios.interceptors.response.use(res => {
  console.log(res)
  return res
 })




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
