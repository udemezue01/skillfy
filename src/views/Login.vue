<template>
  <div class=" space-y-8">

  

      


    <div class="w-full mt-32 space-y-12 items-center max-w-sm p-6 m-auto rounded-md shadow-xs">

        <h1 class="text-4xl font-black text-center text-transparent tracking-wider text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Skillfy</h1>

        <form class="mt-6">
            <div>
                <label for="username" class="block font-body text-sm text-gray-800 dark:text-gray-200">Username</label>
                <input type="text"

                    v-model="loginDetails.username"

                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password" class="block font-body text-sm text-gray-800 dark:text-gray-200">Password</label>
                    <a href="#" class="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                </div>

                <input type="password"

                    v-model="loginDetails.password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

            <div class="mt-6">
                <button
                    class="w-full font-body tracking-wider px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900">
                    Login
                </button>
            </div>
        </form>

        <div>
             <p class="mt-8 text-md font-light text-center text-gray-400"> Don't have an account? <router-link to="/register"
                class="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</router-link></p>
        </div>

      
      
  
</div>

  </div>



</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  data(){

    return{

      loginDetails:{

      username:"",
      password:""
    },
  


    }

    
  },

  methods:{

    ...mapActions(['userLogin']),

    loginUser: function(){
      this.userLogin(this.loginDetails)
      .then(() => this.$router.push('/'))

 },
  }


}
</script>
