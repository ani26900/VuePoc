<template>
<div class="container">
    <div class="container">
        <!-- {{this.$route.params.id}} -->
        <!-- <h1>{{country}}</h1> -->
        

  
    <p><b><h3>{{ $store.getters.countrylist[$route.params.id - 1].countryname }}</h3> </b></p>
   
<div class="detail">
			<img v-bind:src="$store.getters.countrylist[$route.params.id - 1].img" width="100%" height="100%">
		</div>
    </div>
    </div>

    

</template>
<script>
export default {
    data(){
        return{
            country:''
        }
    },
    created(){
        this.country=this.$store.state.Countries[this.$route.params.id]
    }
}
</script>

<style>
.title{
    width: 0px;
    margin: auto;
    background-color: blue;
}
.detail{
    border: 1px gray solid;
    width: 500px;
    height: 100px;
    background-color: aliceblue;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: sans-serif;
}
</style>
