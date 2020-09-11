export default {
  namespaced: true,

  state: {
    tabs: null
  },

  getters: {
    tabs: state => state.tabs
  },

  mutations: {
    setTabs(state, tabs) {
      state.tabs = tabs
    }
  }
}
