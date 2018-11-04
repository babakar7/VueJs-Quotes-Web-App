<template>

<div class="quotes">

<Quote v-for="(quote,index) in quotes" v-bind:key="index" v-bind:quote=quotes[index] v-bind:id=index />

</div>


</template>



    <script>
import Quote from '@/components/Quote'
import {eventBus} from '../main'

export default{
name:'ShowQuotes',

components:{
  Quote:Quote
},

props:{
  quotes:Array
},
  data(){

    return{


    }
  },

  created(){

    eventBus.$on('remove', (id) => this.quotes.splice(id,1))


  }
}

    </script>



    <style scoped>


.quotes{

  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;

}

    </style>
