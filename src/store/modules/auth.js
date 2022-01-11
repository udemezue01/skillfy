
// The apolloClient Trigger

import { supabase } from "../../supabase";



const state =  {

  	user:null,

  };

const getters = {

  	isAuthenticated: state => !!state.userId,


  };

const mutations =  {

  SET_TOKEN(state, token){
  		state.token = token
  	},


  SET_USER_ID(state, userId){
      state.userId = userId
    },

  ERR_TOKEN(state, errorMsg){

      state.errorMsg = err
    }
  };


const actions  =  {

  // The user login API

  	async userLogin({commit}, loginDetails){

  		try{

  			const { error, user } = await supabase.auth.signIn({
          
          email: loginDetails.email,
          password: loginDetails.password,
        });

  			if (error) throw error;
        alert("You've Signed In successfully");
        await router.push('/')
        commit('setUser', user.email)
      } catch (error) {
        alert(error.error_description || error.message);
      }
  	},

    // The user registration API


    async userRegister({commit}, registerDetails){

      try{




      }
        catch(e){


        }

    },

    // The password reset API 
    async passwordReset({commit}, resetDetails){

      try{


      }
      catch(e){

        
      }

    },


  }


  export default {

    state,
    getters,
    mutations,
    actions
  }

