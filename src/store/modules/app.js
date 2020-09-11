export default {
  namespaced: true,

  state: {
    tabs: null,
    amount: 1
  },

  getters: {
    tabs: state => state.tabs,
    amount: state => state.amount
  },

  mutations: {
    setTabs(state, tabs) {
      state.tabs = tabs
    },

    setAmount(state, amount) {
      state.amount = amount
    }
  }
}
