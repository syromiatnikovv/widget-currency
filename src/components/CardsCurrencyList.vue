<template>
  <div class="cards-currency-list">
    <v-tabs-items v-model="tabs">
      <TabItem
        v-for="currency of currencies"
        :key="currency"
        :currency="currency"
      />
    </v-tabs-items>
  </div>
</template>

<script>
import TabItem from './TabItem.vue'

export default {
  components: {
    TabItem
  },

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
  }
}
</script>
