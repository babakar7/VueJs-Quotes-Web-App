<template>


<div>
    <Header v-bind:quoteCount=quoteCount />


    <AddQuote v-on:incomingQuote="newQuote" v-bind:quoteCount=quoteCount />


    <ShowQuotes v-bind:quotes="quotes"/>

  </div>
</template>

<script>

import Header from '@/components/Header'
import AddQuote from '@/components/AddQuote'
import ShowQuotes from '@/components/ShowQuotes'

export default {
  name: 'Home',
  components:{
    Header:Header,
    AddQuote:AddQuote,
    ShowQuotes:ShowQuotes
  },
  data () {
    return {

      quotes:[],
      quoteCount:null,
    }
  },

  methods:{

    newQuote(quote){

        this.quotes.push(quote)
    }
  },

  computed:{

      count(){
      this.quoteCount =  this.quotes.length
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
