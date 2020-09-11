<template>
  <v-tabs
    background-color="#ffe782"
    color="#2b2d33"
    hide-slider
    v-model="tabs"
    :show-arrows="true"
  >
    <v-tab
      v-for="currency of currencies"
      :key="currency"
      :href="`#tab-${currency}`"
      @change="getRates(currency)"
    >
      {{ currency }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  computed: {
    tabs: {
      get() {
        return this.$store.getters['app/tabs']
      },
      set(value) {
        this.$store.commit('app/setTabs', value)
      }
    },

    currencies() {
      return this.$store.getters['currencies/currencies']
    }
  },

  methods: {
    getRates(currency) {
      this.$store.dispatch('currencies/getRates', currency)
    }
  }
}
</script>

<style lang="scss">
.v-tab {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &::before {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &--active {
    background: #fff;
  }
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: rgba(0, 0, 0, 0.34);
}
</style>
