<template>
  <footer class="widget__footer">
    <v-btn color="white" disabled class="btn-prev">
      <v-icon left>mdi-chevron-left</v-icon>
      Назад
    </v-btn>

    <v-btn color="white" class="btn-next">
      Далее
      <v-icon right>mdi-chevron-right</v-icon>
    </v-btn>
  </footer>
</template>

<style lang="scss">
.widget__footer {
  padding: 0 24px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-prev,
.btn-next {
  font-weight: 300 !important;
  box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16) !important;
  border-radius: 8px !important;
}

.btn-prev {
  margin-right: 20px;
}

.theme--light.v-btn.btn-prev.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined),
.theme--light.v-btn.btn-next.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #efefef !important;
}
</style>
