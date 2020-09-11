import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1264,
      xl: 1904
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#ffe782'
      }
    }
  }
})
