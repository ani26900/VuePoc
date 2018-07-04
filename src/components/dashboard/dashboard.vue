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

export default {
  computed: {
    email(){
      return !this.$store.getters.user? false:this.$store.getters.user.email
    }
  },

  data() {
    return{
    Countries: [],
    search:""
    }
  
  },
 computed:
{
    filteredCountries:function()
    {
       var self=this;
       this.Countries=this.$store.state.Countries;
       return this.Countries.filter(function(cust){return cust.countryname.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
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