<template>
  <div class=" space-y-8">

  
    <section class="grid grid-cols-3 gap-4 ">
      
     <!--  The card section -->

     <div  class="rounded-xs">

      <!-- card image -->

        <img src="/img/images/creativity.svg" class="h-32 w-12 object-center object-cover" />
   

      <!-- End of the card image -->

      <!-- The card body -->

      <div class="p-3 ">


      </div>

      <!-- End of the card body -->


    </div>


     <!--  End of the card section -->







    
    </section>


  </div>



</template>

<script>


export default {
  name: 'Talents',

  data(){

    return {

      "talents":[

        {

          "name":"Udemezue John",
        },


      ]



    }
  },


  created(){
      HTTP.get(`https://bio.torre.co/api/bios/johnbenjaminzeus`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response)
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })


  }
  
}
</script>
