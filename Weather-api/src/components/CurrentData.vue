<template>
  <div>
    <div v-if ="loading">
    <RowValue/>
    <SomeValue/>
    </div>
    <button @click="currentValue">Get Weather</button>
     
  </div>
</template>

<script>
import SomeValue from "./SomeValue";
import RowValue from "./RowValue";

export default {
    components:{
    RowValue,
    SomeValue,
    
},
    data(){
        return{
           
        }
    },
        methods:{
        // async currentWeatherValue(){
        //     const url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=06e20cefadf49738fa933cc7d485e885"
        //   const response = await fetch(url)
        // const data = await response.json()
         //console.log(data)
         currentValue(){
         this.$http.get('http://localhost:8080/data/2.5/weather?q=London,uk&appid=06e20cefadf49738fa933cc7d485e885').then(response => {
             
            
             const dataValue = new Date();
             const value = {
                 date : dataValue,
                 body : response.body
             }    
             this.$store.commit('setWeatherValue',value)
             }, response => {
                 console.log(response)
             });
            }
        },
        computed:{
            loading(){
                if(this.store.state.weatherValues.length === 0) {
                    return false
                } else{
                    return true
                }
            }
        },
        //async mounted() {
          //  await this.currentWeatherValue()
        //}
    }

</script>

<style>

</style>