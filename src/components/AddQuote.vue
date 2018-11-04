<template>





  <div class="card white wrapper">
    <div class="card-content">


      <span class="card-title"> Enter quote</span>


      <form >
        <input type=text v-model="quote">

      </form>
    </div>


    <p v-show="feedback" style="color:red">{{feedback}} </p>
    <div class="card-action">
      <a class="waves-effect waves-light btn" v-on:click="newQuote">Add Quote</a>
    </div>


  </div>

</template>



    <script>

export default{
name:'AddQuote',

props:{

  quoteCount:Number
},
  data(){

    return{

      quote:null,
      feedback:null

    }
  },

  methods:{

    newQuote(){

      if(this.quote && this.quoteCount !== 10){

        this.$emit('incomingQuote', this.quote)
        this.quote = null
        this.feedback =null


      }else if (!this.quote){

        this.feedback ='You must enter a quote'
      }
      else if (this.quoteCount ==10){


        this.feedback = 'You cannot add more than 10 quotes'
      }
    }
  }
}

    </script>


    <style>


.wrapper{

  max-width:600px;
  margin: 20px auto;
}
    </style>
