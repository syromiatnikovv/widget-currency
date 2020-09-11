<template>
  <header class="widget__header">
    <h3 class="widget-title">Курс EUR сегодня</h3>

    <Tabs />
  </header>
</template>

<script>
import Tabs from './Tabs.vue'

export default {
  components: {
    Tabs
  }
}
</script>

<style lang="scss">
.widget__header {
  background: $primary;
}

.widget-title {
  display: block;
  margin-top: 0;
  margin-bottom: 8px;
  padding: 30px 24px 0;
  font-size: 21px;
  line-height: 25px;
  font-weight: 400;
}
</style>
