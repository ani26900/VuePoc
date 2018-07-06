<template>
  <div class="hello">
<div class="container">
  <div class="well" >
 
    <div class="well">
      <h1> Enter Country Name </h1>
      <input type="text" class="form-control" v-model="search">
    </div>
    <div class="well">
      <ul>
        <router-link tag="li" v-for="(country) in filteredCountries" :key="country" :to="{name: 'DetailPage', params: { id: country.id }}" class="list-group-item" style="cursor: pointer" >
         <h1> {{country.countryname}} </h1>

         <p>This is the web app which has many vue features in it,it has routing,stateManagement,authentication,
           input form validations !!
         </p>
        </router-link>
      </ul>
    </div>
    </div>
  </div>
  <!-- <p>Dash Board</p> -->
 </div>
</template>
<script>
import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
  computed: {
    email(){
      return !this.$store.getters.user? false:this.$store.getters.user.email
    },
     filteredCountries:function()
     {   
      //  var self=this;
     // Countries.map(countryname => {countryname});
      this.Countries=this.$store.getters.countrylist;

     return  this.Countries.filter((ele) => {
      console.log(ele)       
       return ele.countryname.toLowerCase().match(this.search.toLowerCase());
       
     })
      /*
       return this.Countries.filter(function(cust){return cust.countryname.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
    */
    },
    ...mapGetters({
        fetchUser: 'countrylist'
    }),

  },

  data() {
    return{
    Countries: [],
    search:""
    }
  
  },

  created() {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: black;
  }
</style>