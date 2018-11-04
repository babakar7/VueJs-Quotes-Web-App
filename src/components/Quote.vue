<template>

      <div class="card horizontal quote">

          <div class="card-content">
            <p> {{quote}}</p>


            <i class="material-icons delete" v-on:click="remove" >delete </i>
          </div>

      </div>

</template>



    <script>
import {eventBus} from '../main'

export default{
name:'Quote',
props:{
  quote:String,
  id:Number

},
  data(){

    return{


    }
  },

  methods:{

    remove(){

        eventBus.$emit('remove', this.id)
    }
  }
}

    </script>


    <style scoped>


.quote{

  flex-basis:10%;
}

.delete{
  font-size:15px;
  color:grey;
  position:absolute;
  top:2px;
  right:2px;
  cursor: pointer;
}

    </style>
