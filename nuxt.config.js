import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Home',
    title: 'Abdallah-Rabeh',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/1.jpeg'},
      {rel:'stylesheet', href:'css/all.min.css'},
      {rel:'stylesheet', href:'css/bootstrap.min.css'}
    ],
    script: [
      { src:'js/all.min.js', type:'text/javascript' },
      { src:'js/bootstrap.bundle.min.js', type:'text/javascript' },
      { src: 'js/chat.js', type:'text/javascript'}
    ],

    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'boxicons/css/boxicons.min.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router:{
    base: '/Portfolio_v2.0/'
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   // https://go.nuxtjs.dev/axios
  //   '@nuxtjs/axios',
  // ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '',
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#fff',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          grey: colors.grey.darken4
        }
      },
      light:{
        primary: '#fff', 
        secondary: colors.red.lighten4, 
        accent: colors.indigo.base,
        grey: colors.grey.darken1
      },
      options: {
        customProperties: true,
        variations: false,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server:{
    port: process.env.PORT || 3000
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
  
}
