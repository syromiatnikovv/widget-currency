import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'
import currencies from './modules/currencies'

export default new Vuex.Store({
  modules: {
    app,
    currencies
  }
})
