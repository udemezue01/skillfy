module.exports = {

  mode: 'jit',
  purge: [

  './src/App.vue',
     './src/components/Navbar.vue',
      './src/components/Footbar.vue',
    './src/views/Home.vue',
     './src/views/Login.vue',

  

    ],
  theme: {

    fontFamily:{

    'body':['DM Sans']

    },
    extend: {},
  },
  plugins: [],
}