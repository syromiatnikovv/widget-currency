import axios from 'axios'

export default {
  namespaced: true,

  state: {
    currencies: null,
    rates: null,
    base: null,
    ratesDiv: null,
    pageRates: 0
  },

  getters: {
    currencies: state => state.currencies,
    rates: state => state.rates,
    base: state => state.base,
    ratesDiv: state => state.ratesDiv,
    pageRates: state => state.pageRates
  },

  mutations: {
    setCurrencies(state, currencies) {
      state.currencies = currencies
    },

    setRates(state, rates) {
      state.rates = rates
    },

    setBase(state, currency) {
      state.base = currency
    },

    setRatesDiv(state, rates) {
      const values = Object.values(rates)
      const ratesDiv = []
      let counter = 0
      let portion = {}

      for (let key in rates) {
        if (counter !== 0 && counter % 4 === 0) {
          ratesDiv.push(portion)
          portion = {}
        }
        portion[key] = values[counter]
        counter++
      }
      ratesDiv.push(portion)

      state.ratesDiv = ratesDiv
    },

    nextPageRates(state) {
      if (state.pageRates !== state.ratesDiv.length) {
        state.pageRates = state.pageRates + 1
      }
    },

    prevPageRates(state) {
      if (state.pageRates !== 0) {
        state.pageRates = state.pageRates - 1
      }
    },

    resetPageRates(state) {
      state.pageRates = 0
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
        commit('setBase', currency)
        commit('setRatesDiv', rates)
        commit('resetPageRates')
      } catch (error) {
        throw new Error('Ошибка получения ставок')
      }
    }
  }
}
