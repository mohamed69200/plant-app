import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers
  head: {
    titleTemplate: '%s - my-plants-app',
    title: 'my-plants-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    // Ajoutez des fichiers CSS globaux si nécessaire, sinon laissez vide
  ],

  // Plugins to run before rendering page
  plugins: [
    // Ajoutez ici des plugins si vous en avez
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Vuetify module configuration
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,  // Thème clair
      themes: {
        light: {  // Configuration du thème clair
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration
  build: {
    // Configuration de build
  }
}
