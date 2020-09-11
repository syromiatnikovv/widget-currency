<template>
  <div class="main-layout">
    <Widget />
  </div>
</template>

<script>
import Widget from '@/components/Widget'

export default {
  components: {
    Widget
  }
}
</script>

<style lang="scss">
.main-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f2f2f2;
}
</style>
