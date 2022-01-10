module.exports = {

  mode: 'jit',
  purge: [

  './src/App.vue',
     './src/components/Navbar.vue',
      './src/components/Footbar.vue',
    './src/views/Home.vue',
  

    ],
  theme: {

    fontFamily:{

    'body':['DM Sans']

    },
    extend: {},
  },
  plugins: [],
}