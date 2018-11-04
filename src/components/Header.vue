<template>

<div>

  <nav>
     <div class="nav-wrapper">
       <a href="/" class="brand-logo logo">Quotes</a>

     </div>
   </nav>


   <div class="progress">
       <div class="determinate" ></div>


  <p style="color:black; font-size:20px">  {{quoteCount}} </p>

   </div>

</div>

</template>



    <script>

 export default{
name:'Header',

props:{
  quoteCount:Number
},
  data(){

    return{
    }
},





    }


    </script>


    <style>

.logo{

  left:100px;
}

.progress{

}

    </style>
