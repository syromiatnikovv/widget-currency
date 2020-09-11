<template>
  <v-tabs
    background-color="#ffe782"
    color="#2b2d33"
    hide-slider
    v-model="tabs"
    :show-arrows="$vuetify.breakpoint.smAndDown"
  >
    <v-tab v-for="i in 10" :key="i" :href="`#tab-${i}`">
      EUR
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
