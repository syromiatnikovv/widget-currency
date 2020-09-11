<template>
  <v-card flat tile class="widget">
    <WidgetHeader />

    <WidgetBody />

    <WidgetFooter />
  </v-card>
</template>

<script>
import WidgetHeader from './WidgetHeader.vue'
import WidgetBody from './WidgetBody.vue'
import WidgetFooter from './WidgetFooter.vue'

export default {
  components: {
    WidgetHeader,
    WidgetBody,
    WidgetFooter
  },

  mounted() {
    this.$store.dispatch('currencies/getCurrencies')
  }
}
</script>

<style lang="scss">
.widget {
  width: 720px;

  @media screen and (max-width: 767px) {
    width: 320px;
  }
}
</style>
