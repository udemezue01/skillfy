<template>
  <div class="space-y-8">

  <!--   The navigational bar -->

  <nav class="flex justify-between items-center py-4 bg-gray-50 shadow-sm px-6 sticky top-0 lg:px-12">

  <div>

    <h1 class="font-extrabold text-transparent tracking-wider text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Skillfy

    </h1>


  </div>

    <div>

      <router-link to="/login"class="bg-black font-bold text-white py-2 px-3 rounded-sm tracking-wider"> Get started</router-link>

  </div>
  



</nav>



    <!-- End of the navigational bar -->


  <!--   The Hero section -->

    <section class="flex-wrap lg:flex justify-between px-6 lg:px-12">

      <div class=" tracking-wider pt-32  text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-snug space-y-8">

        <h2 class="font-extrabold text-6xl"> 

            Hire and manage <br> global Talents in <br> one place.

        </h2>

        <p class="text-2xl text-gray-700 tracking-wider"> Get all the talent pool in one place</p>

        <!-- The call to action button -->

        <div class="flex space-x-4">
          <button class ="bg-black font-bold text-white py-2 px-3 rounded-sm tracking-wider"> Learn how</button>

          <button class ="bg-transparent font-bold text-black py-2 px-3 rounded-sm tracking-wider ring-1 ring-black"> Get started</button>

        </div>

      <!--   End of call to action button -->

        </div>



      <div class="hidden lg:block">

        <img src="/img/images/creativity.svg" class="h-[700px] w-auto object-center object-cover">
        
        
      </div>
      

    </section>

   <!--  End of the Hero section -->

   <!-- First section starts -->

  <section class="p-4 bg-gray-100 rounded-xs flex-wrap lg:flex justify-between px-6 lg:px-12">

       

         

    <div class="hidden lg:block">

        <img src="/img/images/thinking.svg" class="h-[700px] w-auto object-center object-cover">
        
        
      </div>

      <div class=" tracking-wider pt-32  text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-snug space-y-12">

        <h2 class="font-extrabold text-6xl"> 

            Fish Talents from a <br>global Pool.
        </h2>

        <p class="text-2xl text-gray-700 tracking-wider leading-normal"> Are you a world class talent, join our global <br> pool of talent to get visibility</p>

        <!-- The call to action button -->

        <div class="">
        

        <button class ="bg-black font-bold text-white py-2 px-3 rounded-sm tracking-wider ring-1 ring-black"> Get started</button>

        </div>

      <!--   End of call to action button -->

        </div>

      
      
    </section>

    <!-- End of the first section
 -->


   <!--  The second section -->


       <section class="p-4 bg-transparent rounded-xs flex-wrap lg:flex justify-between px-6 lg:px-12">


          

      <div class=" tracking-wider pt-32  text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-snug space-y-12">

        <h2 class="font-extrabold text-6xl"> 

            Get access to global <br> opportunities.
        </h2>

        <p class="text-2xl text-gray-700 tracking-wider leading-normal"> Are you a world class talent, join our global <br> pool of talent to get visibility</p>

        <!-- The call to action button -->

        <div class="">
        

        <button class ="bg-black font-bold text-white py-2 px-3 rounded-sm tracking-wider ring-1 ring-black"> Get started</button>

        </div>

      <!--   End of call to action button -->

        </div>


      <div class="hidden lg:block">

        <img src="/img/images/world.svg" class="h-[700px] w-auto object-center object-cover">
        
        
      </div>

      
      
    </section>

      


    <!-- End of the second section -->

    <!-- The footer section. -->

    <footer class="bg-black p-12 lg:flex flex-wrap justify-between items-center space-y-6 tracking-widest px-6 lg:px-24">

      <div class="block space-y-8">

        <a href="" class="block text-xl font-semibold text-white"> About </a>

        <a href="" class="block text-gray-200"> Careers </a>

        <a href="" class="block text-gray-200"> Press & News </a>

        <a href="" class="block text-gray-200"> Privacy Policy </a>

        <a href="" class="block text-gray-200"> Terms of Service </a>

        <a href="" class="block text-gray-200"> Partnerships </a>
        

      </div>

    

      <div class="block space-y-8">

        <a href="" class="block text-xl font-semibold text-white"> Community </a>

        <a href="" class="block text-gray-200"> Events </a>

        <a href="" class="block text-gray-200"> Blog </a>

        <a href="" class="block text-gray-200"> Community Standards </a>

        <a href="" class="block text-gray-200"> Affiliates </a>

        <a href="" class="block text-gray-200"> Invite a Friend </a>
        

      </div>

      <div class="block space-y-8">

        <a href="" class="block text-xl font-semibold text-white"> Support </a>

        <a href="" class="block text-gray-200"> Help & Support </a>

        <a href="" class="block text-gray-200"> Trust & Safety </a>

        <a href="" class="block text-gray-200"> Become a Software Developer </a>

        <a href="" class="block text-gray-200"> Sitemap </a>

        <a href="" class="block text-gray-200"> Lifestyle </a>



      </div>

     <div class="block space-y-8">

        <a href="" class="block text-xl font-semibold text-white"> About </a>

        <a href="" class="block text-gray-200"> Careers </a>

        <a href="" class="block text-gray-200"> Press & News </a>

        <a href="" class="block text-gray-200"> Privacy Policy </a>

        <a href="" class="block text-gray-200"> Terms of Service </a>

        <a href="" class="block text-gray-200"> Partnerships </a>
        

      </div>


    </footer>


    <!-- End of the footer section -->



  </div>



</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  
}
</script>
