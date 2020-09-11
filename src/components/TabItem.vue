<template>
  <v-tab-item :value="`tab-${currency}`">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        v-for="(value, key) of rates"
        :key="key"
        v-show="currency !== key"
      >
        <v-card class="card-currency">
          <div class="card-currency__amount">
            {{ amount }} <span class="text--muted">{{ currency }} =</span>
          </div>
          <div class="card-currency__calculated">
            {{ rateModify(amount * value) }}<span> {{ key }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-tab-item>
</template>

<script>
export default {
  props: {
    currency: String
  },

  computed: {
    rates() {
      return this.$store.getters['currencies/rates']
    },

    amount() {
      return this.$store.getters['app/amount']
    }
  },

  methods: {
    rateModify(value) {
      return value.toFixed(2).replace(/\./, ',')
    }
  }
}
</script>

<style lang="scss">
.card-currency {
  padding: 18px 10px 18px 30px;
  box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16) !important;
  border-radius: 12px !important;

  &__amount {
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.0171429px;
    padding-bottom: 18px;

    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.0128571px;
    }
  }

  &__calculated {
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.0342857px;

    @media screen and (max-width: 767px) {
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0.0257143px;
    }

    span {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.0171429px;

      @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.0128571px;
      }
    }
  }
}
</style>
