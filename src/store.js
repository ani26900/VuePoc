import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
import globalAxios from 'axios';
import route from './router'
import router from './router';
//import countries from './data/countries'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    Countries: [
      {id:1,countryname: "India" , img: 'https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463__340.png'},
      {id:2,countryname: "China", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png'},
      {id:3,countryname: "Usa", img: 'https://previews.123rf.com/images/korinoxe/korinoxe1409/korinoxe140900135/31695461-vector-isolated-usa-flag-in-grunge-style.jpg'},
      {id:4,countryname: "Gerrmany", img: 'data:image/jpeg;base64,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'},
      {id:5,countryname: "Mexico", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png'},
      {id:6,countryname: "Argentina", img: 'https://cdn.pixabay.com/photo/2016/06/16/01/20/argentina-1460299__340.jpg'},
      {id:7,countryname: "Portugal", img: 'http://flags.fmcdn.net/data/flags/w580/pt.png'},
      {id:8,countryname: "England", img: 'http://images.all-free-download.com/images/graphicthumb/colors_of_england_201015.jpg'},
      {id:9,countryname: "Turkey", img: 'http://flags.fmcdn.net/data/flags/w580/tr.png'},
      {id:10,countryname: "Sweden", img: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg'},
      {id:11,countryname: "Australia", img: 'https://cdn.countryflags.com/thumbs/australia/flag-400.png'},
      {id:12,countryname: "NewZeland", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png'},
     

    ]
  },
  mutations: {
    authUser (state,userData){
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state,user){
      state.user = user;
    },
    clearData(state){
      state.idToken=null
      state.userId=null
    }
  },
  actions: {
    signUp({commit,dispatch}, authData){
      axios.post('/signupNewUser?key=AIzaSyBCUC4pRSp0JEiPwMc-s0v_CzGbizoTr3Y',{
        email : authData.email,
        password: authData.password,
        returnSecureToken: true 
      })
     
      .then(res => {
        console.log(res)
        commit('authUser',{
          token:res.data.idToken,
          userId: res.data.localId
        })
        dispatch('storeUser', authData)
      })
      .catch(error => console.log(error))
    },
    logIn({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyBCUC4pRSp0JEiPwMc-s0v_CzGbizoTr3Y',{
        email : authData.email,
        password: authData.password,
        returnSecureToken: true 
      })
       .then(res =>{ 
         console.log(res)
        commit('authUser',{
          token: res.data.idToken,
          userId: res.data.localId
        })
        router.push('DashBoard');
       

      })

      .catch(error => {
        alert('UserName or Password does not match')
      })
    },
    logout({commit}){
      commit('clearData')
      router.replace('/signin')
    },
    storeUser({commit,state} , userData) {
      if(!state.idToken){
        return
      }
      globalAxios.post('/users.json' + '?auth=' +  state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    fetchUser({commit,state}) {
      if(!state.idToken){
        return
      }
      globalAxios.get('/users.json ' + '?auth=' + state.idToken)
      .then(res =>
      { console.log(res)
      const data =res.data
      const users = []
      for(let key in data)
      {
        const user = data [key]
        user.id =key
        users.push(user) 
      }
      console.log(users) 
      commit('storeUser', users[0])
      })
      .catch(error =>{ })
    }

  },
  getters: {
     user(state){
       return state.user
     },
     isAuthenticated(state){
      return state.idToken!==null
     },

    // listData(state){}
    countrylist: state => {
      return state.Countries
    }
  }
})