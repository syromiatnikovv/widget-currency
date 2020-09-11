<template>
  <main class="widget__body">
    <Amount />

    <CardsCurrencyList />
  </main>
</template>

<script>
import Amount from './Amount.vue'
import CardsCurrencyList from './CardsCurrencyList.vue'

export default {
  components: {
    Amount,
    CardsCurrencyList
  }
}
</script>

<style lang="scss">
.widget__body {
  padding: 30px 24px;
}
</style>
