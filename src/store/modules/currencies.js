import axios from 'axios'

export default {
  namespaced: true,

  state: {
    currencies: null,
    rates: null
  },

  getters: {
    currencies: state => state.currencies,
    rates: state => state.rates
  },

  mutations: {
    setCurrencies(state, currencies) {
      state.currencies = currencies
    },

    setRates(state, rates) {
      state.rates = rates
    }
  },

  actions: {
    async getCurrencies({ commit, dispatch }) {
      try {
        const { data } = await axios.get('https://api.openrates.io/latest')
        const currencies = [...Object.keys(data.rates), data.base].sort()

        commit('setCurrencies', currencies)
        dispatch('getRates', currencies[0]) // first tab init data
      } catch (error) {
        throw new Error('Ошибка получения валют')
      }
    },

    async getRates({ commit }, currency) {
      try {
        const { data } = await axios.get(
          `https://api.openrates.io/latest?base=${currency}`
        )
        const rates = data.rates

        commit('setRates', rates)
      } catch (error) {
        throw new Error('Ошибка получения ставок')
      }
    }
  }
}
