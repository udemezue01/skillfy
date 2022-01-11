<template>
  <div id="app" class="h-sreen">

    <!-- <NavBar class="sticky top-0"/> -->
    
    <router-view/>
  </div>
</template>


<script>

import NavBar from '@/components/NavBar.vue'
  
  export default{

    components:{

      NavBar,
    }


  }
</script>

