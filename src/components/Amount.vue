<template>
  <div class="amount">
    <v-text-field
      v-model="amount"
      class="amount__input"
      color="primary"
      type="number"
    ></v-text-field>

    <span class="amount__currency text--muted">{{ base }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    amount: {
      get() {
        return this.$store.getters['app/amount']
      },
      set(value) {
        this.$store.commit('app/setAmount', value)
      }
    },

    base() {
      return this.$store.getters['currencies/base']
    }
  }
}
</script>

<style lang="scss">
.amount {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__input {
    font-size: 18px !important;
    width: 120px;
    flex: 0 0 auto !important;
    margin-right: 6px;

    input {
      text-align: right;
    }
  }

  &__currency {
    font-size: 18px;
    margin-bottom: 5px;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #d9d9d9 !important;
}
</style>
